import { fetchAPI } from '../services/wp-api';

export default async function Home() {
  const data = await fetchAPI(`
    query GetRecentPosts {
      posts(first: 2) {
        nodes {
          id
          title
        }
      }
    }
  `);

  const posts = data?.posts?.nodes || [];

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-2xl font-bold mb-6">Últimos Posts do WordPress</h1>
      
      {posts.length > 0 ? (
        <ul className="list-disc space-y-2">
          {posts.map((post: { id: string; title: string }) => (
            <li key={post.id} className="text-gray-800 hover:text-blue-600">
              {post.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </main>
  );
}
