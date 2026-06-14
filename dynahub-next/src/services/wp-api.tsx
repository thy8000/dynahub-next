const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL;

/**
 * Executes a GraphQL query on the WordPress API.
 * @param query - The GraphQL query to be executed.
 * @param variables - Optional variables for the query.
 * @returns The API response JSON.
 */
export async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  if (!API_URL) {
    throw new Error('WORDPRESS_API_URL não está definida no .env.local');
  }

  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 3600 },
  });

  const json = await res.json();
  if (json.errors) {
    console.error('Erros no WPGraphQL:', json.errors);
    throw new Error('Falha ao buscar dados da API do WordPress');
  }
  return json.data;
}

/**
 * Busca os itens do menu principal registrados no WordPress.
 * Por padrão, busca o menu atribuído ao local 'PRIMARY'.
 */
export async function getMenuItems() {
  const data = await fetchAPI(`
    query GetMenuItems {
      menuItems(where: {location: MAIN_MENU}, first: 100) {
        nodes {
          id
          label
          url
          parentId
          childItems {
            nodes {
              id
              label
              url
            }
          }
        }
      }
    }
  `);

  // Filtramos os nodes para retornar apenas aqueles que não possuem um pai (parentId === null)
  // Isso evita que itens filhos apareçam duplicados no nível superior do menu.
  return data?.menuItems?.nodes.filter((node: any) => node.parentId === null) || [];
}