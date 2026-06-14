# Spec: Criar componente Header

## Research Findings

- Este projeto é um microsserviço que possui front-end com Next.js, Tailwind e Typescript, e o back-end é um site WordPress. O front-end usa WPGraphQL para consumir o WordPress e trazer informações do WordPress

## O que fazer

- Criar um componente no arquivo Header.tsx (C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\components\Header.tsx)

- Esse componente vai ser um componente reutilizável para o Header do site, chamar em page.tsx (C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\app\page.tsx)

- No Header.tsx, chame o arquivo wp-api (C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\services\wp-api.tsx) para puxar os itens do menu do WordPress (O menu foi registrado no WordPress em C:\Users\user\Documents\Projetos Pessoais\dynahub\repo\dynahub\themes\dynahub\includes\global\register-menus.php)

- O Header vai ter um logo, uma input de pesquisa, redes sociais, e os itens do menu. 

Segue o código que exportei do Figma usando o plugin Builder.io e converti para código usando IA:

``js
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <style>
        /* Reset básico e fontes */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }

        .header {
            width: 100%;
            background: #12253E;
            display: flex;
            flex-direction: column;
        }

        /* Top Bar */
        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 5%;
            height: 100px;
        }

        .search-form {
            display: flex;
            align-items: center;
            background: transparent;
            border: 1px solid #3A506B;
            border-radius: 30px;
            padding: 10px 20px;
            width: 425px;
        }

        .search-form input {
            background: none;
            border: none;
            color: #8199B7;
            width: 100%;
            outline: none;
        }

        /* Navigation Bar */
        .nav-bar {
            background: #183354;
            height: 60px;
            display: flex;
            align-items: center;
            padding: 0 5%;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 700;
            font-family: 'Manrope', sans-serif;
        }

        .nav-links a.active { color: #F4796C; }

        /* Responsividade simples */
        @media (max-width: 768px) {
            .search-form { width: 250px; }
            .nav-bar { gap: 20px; }
        }
    </style>
</head>
<body>

<header class="header">
    <div class="top-bar">
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/dfaf2bd56e8ad6130d27117a4538332c2be6bd7c?width=342" alt="Logo" style="height: 50px;">
        
        <form class="search-form">
            <input type="text" placeholder="Search here . . .">
            </form>

        <div class="social-icons">
            </div>
    </div>

    <nav class="nav-bar">
        <ul class="nav-links">
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>

</body>
</html>


- Para o CSS, use TailwindCSS (Se for necessário criar classes, crie um arquivo chamado Header.module.css em C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\components, estilize lá e importe em C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\components\Header.tsx)

- As cores que não forem branco, pode criar as variáveis em C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\app\globals.css para reutilizar no tailwind

- A imagem do logo é a C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\assets\images\main-menu-logo.png

- O ícone no input do search não foi puxado no código gerado no figma, mas use o ícone C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\assets\icons\search.svg para o ícone de search

- As redes sociais também não foram geradas no código do figma, mas use os ícones para as seguintes redes sociais: 

    - Facebook:  C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\assets\icons\facebook.svg
    - Instagram: C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\assets\icons\instagram.svg
    - Linkedin: C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\assets\icons\linkedin.svg
    - Twitter: C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\assets\icons\twitter.svg

- Para o sub-menu, crie um layout de sub-menu padrão

- Depois, chame o componente em C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\app\page.tsx

# Estrutura

- Fazer componente Header em C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\components\Header.tsx

- Puxar dados da API do WordPress em C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\services\wp-api.tsx

- Puxar ícones e imagens em C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\assets\icons e C:\Users\user\Documents\Projetos Pessoais\dynahub-next\dynahub-next\src\assets\images

# Performance

- Faça a requisição da forma mais performática possível, tentando sempre deixar o código otimizado de forma que carregue mais rápido o componente e o site

# Imagens e Referências

- Para referência do Header em Imagem, segue a imagem: ![alt text](image.png)

- Também tenho um objeto criado do Figma usando Figma to Cursor, que converte o protótipo para objeto para ser usado em IA para contexto, segue ela: 

{
  "id": "4:914",
  "name": "Header",
  "type": "FRAME",
  "x": 0,
  "y": 0,
  "width": 1920,
  "height": 160,
  "relativeTransform": [
    [
      1,
      0,
      0
    ],
    [
      0,
      1,
      0
    ]
  ],
  "constraints": {
    "horizontal": "STRETCH",
    "vertical": "MIN"
  },
  "fills": [
    {
      "type": "SOLID",
      "visible": true,
      "opacity": 1,
      "blendMode": "NORMAL",
      "color": {
        "r": 0.07058823853731155,
        "g": 0.14509804546833038,
        "b": 0.24313725531101227
      },
      "boundVariables": {}
    }
  ],
  "strokes": [],
  "strokeWeight": 1,
  "cornerRadius": 0,
  "effects": [],
  "blendMode": "PASS_THROUGH",
  "layoutAlign": "INHERIT",
  "layoutGrow": 0,
  "layoutMode": "NONE",
  "itemSpacing": 0,
  "children": [
    {
      "id": "4:915",
      "name": "Link",
      "type": "FRAME",
      "x": 315,
      "y": 25,
      "width": 171,
      "height": 50,
      "relativeTransform": [
        [
          1,
          0,
          315
        ],
        [
          0,
          1,
          25
        ]
      ],
      "constraints": {
        "horizontal": "MIN",
        "vertical": "MIN"
      },
      "fills": [],
      "strokes": [],
      "strokeWeight": 1,
      "cornerRadius": 0,
      "effects": [],
      "blendMode": "PASS_THROUGH",
      "layoutAlign": "INHERIT",
      "layoutGrow": 0,
      "layoutMode": "NONE",
      "itemSpacing": 0,
      "children": [
        {
          "id": "4:916",
          "name": "w_logo.png",
          "type": "FRAME",
          "x": 0,
          "y": 0,
          "width": 171,
          "height": 50,
          "relativeTransform": [
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              0
            ]
          ],
          "constraints": {
            "horizontal": "MIN",
            "vertical": "CENTER"
          },
          "fills": [
            {
              "type": "IMAGE",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "scaleMode": "CROP",
              "scalingFactor": 1,
              "filters": {
                "exposure": 0,
                "contrast": 0,
                "saturation": 0,
                "temperature": 0,
                "tint": 0,
                "highlights": 0,
                "shadows": 0
              },
              "imageTransform": [
                [
                  1,
                  0,
                  0
                ],
                [
                  0,
                  1,
                  0
                ]
              ],
              "imageHash": "a1350592f58065b4b589ec03dbbfde207d65ae9a"
            }
          ],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 0,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "layoutMode": "NONE",
          "itemSpacing": 0,
          "children": []
        }
      ]
    },
    {
      "id": "4:917",
      "name": "Link",
      "type": "FRAME",
      "x": 516,
      "y": 41,
      "width": 33,
      "height": 18,
      "relativeTransform": [
        [
          1,
          0,
          516
        ],
        [
          0,
          1,
          41
        ]
      ],
      "constraints": {
        "horizontal": "STRETCH",
        "vertical": "MIN"
      },
      "fills": [],
      "strokes": [],
      "strokeWeight": 1,
      "cornerRadius": 0,
      "effects": [],
      "blendMode": "PASS_THROUGH",
      "layoutAlign": "INHERIT",
      "layoutGrow": 0,
      "layoutMode": "NONE",
      "itemSpacing": 0,
      "children": [
        {
          "id": "4:918",
          "name": "Horizontal Divider",
          "type": "RECTANGLE",
          "x": 0,
          "y": 0,
          "width": 33,
          "height": 2,
          "relativeTransform": [
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              0
            ]
          ],
          "constraints": {
            "horizontal": "CENTER",
            "vertical": "CENTER"
          },
          "fills": [
            {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                "r": 1,
                "g": 1,
                "b": 1
              },
              "boundVariables": {}
            }
          ],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 2,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "children": []
        },
        {
          "id": "4:919",
          "name": "Horizontal Divider",
          "type": "RECTANGLE",
          "x": 0,
          "y": 8,
          "width": 33,
          "height": 2,
          "relativeTransform": [
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              8
            ]
          ],
          "constraints": {
            "horizontal": "CENTER",
            "vertical": "CENTER"
          },
          "fills": [
            {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                "r": 1,
                "g": 1,
                "b": 1
              },
              "boundVariables": {}
            }
          ],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 2,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "children": []
        },
        {
          "id": "4:920",
          "name": "Horizontal Divider",
          "type": "RECTANGLE",
          "x": 0,
          "y": 16,
          "width": 33,
          "height": 2,
          "relativeTransform": [
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              16
            ]
          ],
          "constraints": {
            "horizontal": "CENTER",
            "vertical": "CENTER"
          },
          "fills": [
            {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                "r": 1,
                "g": 1,
                "b": 1
              },
              "boundVariables": {}
            }
          ],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 2,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "children": []
        }
      ]
    },
    {
      "id": "4:921",
      "name": "Form",
      "type": "FRAME",
      "x": 1061,
      "y": 27.5,
      "width": 425,
      "height": 45,
      "relativeTransform": [
        [
          1,
          0,
          1061
        ],
        [
          0,
          1,
          27.5
        ]
      ],
      "constraints": {
        "horizontal": "MIN",
        "vertical": "MIN"
      },
      "fills": [],
      "strokes": [],
      "strokeWeight": 1,
      "cornerRadius": 0,
      "effects": [],
      "blendMode": "PASS_THROUGH",
      "layoutAlign": "INHERIT",
      "layoutGrow": 0,
      "layoutMode": "NONE",
      "itemSpacing": 0,
      "children": [
        {
          "id": "4:922",
          "name": "Input",
          "type": "FRAME",
          "x": 0,
          "y": 0,
          "width": 425,
          "height": 45,
          "relativeTransform": [
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              0
            ]
          ],
          "constraints": {
            "horizontal": "STRETCH",
            "vertical": "MIN"
          },
          "fills": [],
          "strokes": [
            {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                "r": 0.22745098173618317,
                "g": 0.3137255012989044,
                "b": 0.41960784792900085
              },
              "boundVariables": {}
            }
          ],
          "strokeWeight": 1,
          "cornerRadius": 30,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "layoutMode": "NONE",
          "itemSpacing": 0,
          "children": [
            {
              "id": "4:923",
              "name": "Container",
              "type": "FRAME",
              "x": 21,
              "y": 14,
              "width": 358,
              "height": 17,
              "relativeTransform": [
                [
                  1,
                  0,
                  21
                ],
                [
                  0,
                  1,
                  14
                ]
              ],
              "constraints": {
                "horizontal": "STRETCH",
                "vertical": "MIN"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "layoutMode": "NONE",
              "itemSpacing": 0,
              "children": [
                {
                  "id": "4:924",
                  "name": "Search here . . .",
                  "type": "TEXT",
                  "x": 0,
                  "y": 0,
                  "width": 103.27925109863281,
                  "height": 17,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      0
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [
                    {
                      "type": "SOLID",
                      "visible": true,
                      "opacity": 1,
                      "blendMode": "NORMAL",
                      "color": {
                        "r": 0.5058823823928833,
                        "g": 0.6000000238418579,
                        "b": 0.7176470756530762
                      },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "id": "4:925",
          "name": "Button",
          "type": "FRAME",
          "x": 390,
          "y": 12.5,
          "width": 20,
          "height": 20,
          "relativeTransform": [
            [
              1,
              0,
              390
            ],
            [
              0,
              1,
              12.5
            ]
          ],
          "constraints": {
            "horizontal": "MAX",
            "vertical": "SCALE"
          },
          "fills": [],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 0,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "layoutMode": "NONE",
          "itemSpacing": 0,
          "children": [
            {
              "id": "4:926",
              "name": "Icon",
              "type": "FRAME",
              "x": 0,
              "y": 20,
              "width": 20,
              "height": 20,
              "relativeTransform": [
                [
                  1,
                  0,
                  0
                ],
                [
                  0,
                  -1,
                  20
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "layoutMode": "NONE",
              "itemSpacing": 0,
              "children": [
                {
                  "id": "4:927",
                  "name": "Vector",
                  "type": "VECTOR",
                  "x": 0,
                  "y": 0,
                  "width": 20.000001907348633,
                  "height": 20.000001907348633,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      0
                    ]
                  ],
                  "constraints": {
                    "horizontal": "SCALE",
                    "vertical": "SCALE"
                  },
                  "fills": [
                    {
                      "type": "SOLID",
                      "visible": true,
                      "opacity": 1,
                      "blendMode": "NORMAL",
                      "color": {
                        "r": 1,
                        "g": 1,
                        "b": 1
                      },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 0.06666667014360428,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "4:928",
      "name": "List",
      "type": "FRAME",
      "x": 1506,
      "y": 36,
      "width": 99,
      "height": 28,
      "relativeTransform": [
        [
          1,
          0,
          1506
        ],
        [
          0,
          1,
          36
        ]
      ],
      "constraints": {
        "horizontal": "STRETCH",
        "vertical": "MIN"
      },
      "fills": [],
      "strokes": [],
      "strokeWeight": 1,
      "cornerRadius": 0,
      "effects": [],
      "blendMode": "PASS_THROUGH",
      "layoutAlign": "INHERIT",
      "layoutGrow": 0,
      "layoutMode": "NONE",
      "itemSpacing": 0,
      "children": [
        {
          "id": "4:929",
          "name": "Item → Link",
          "type": "FRAME",
          "x": 0,
          "y": 4,
          "width": 10,
          "height": 20,
          "relativeTransform": [
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              4
            ]
          ],
          "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
          },
          "fills": [],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 0,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "layoutMode": "NONE",
          "itemSpacing": 0,
          "children": [
            {
              "id": "4:930",
              "name": "Symbol",
              "type": "TEXT",
              "x": 0,
              "y": 2,
              "width": 10.3125,
              "height": 16,
              "relativeTransform": [
                [
                  1,
                  0,
                  0
                ],
                [
                  0,
                  1,
                  2
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [
                {
                  "type": "SOLID",
                  "visible": true,
                  "opacity": 1,
                  "blendMode": "NORMAL",
                  "color": {
                    "r": 0.9764705896377563,
                    "g": 0.9764705896377563,
                    "b": 0.9686274528503418
                  },
                  "boundVariables": {}
                }
              ],
              "strokes": [],
              "strokeWeight": 1,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "children": []
            }
          ]
        },
        {
          "id": "4:931",
          "name": "Item → Link",
          "type": "FRAME",
          "x": 25,
          "y": 4,
          "width": 16,
          "height": 20,
          "relativeTransform": [
            [
              1,
              0,
              25
            ],
            [
              0,
              1,
              4
            ]
          ],
          "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
          },
          "fills": [],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 0,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "layoutMode": "NONE",
          "itemSpacing": 0,
          "children": [
            {
              "id": "4:932",
              "name": "Symbol",
              "type": "TEXT",
              "x": 0,
              "y": 2,
              "width": 16.387500762939453,
              "height": 16,
              "relativeTransform": [
                [
                  1,
                  0,
                  0
                ],
                [
                  0,
                  1,
                  2
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [
                {
                  "type": "SOLID",
                  "visible": true,
                  "opacity": 1,
                  "blendMode": "NORMAL",
                  "color": {
                    "r": 0.9764705896377563,
                    "g": 0.9764705896377563,
                    "b": 0.9686274528503418
                  },
                  "boundVariables": {}
                }
              ],
              "strokes": [],
              "strokeWeight": 1,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "children": []
            }
          ]
        },
        {
          "id": "4:933",
          "name": "Item → Link",
          "type": "FRAME",
          "x": 56,
          "y": 4,
          "width": 14,
          "height": 20,
          "relativeTransform": [
            [
              1,
              0,
              56
            ],
            [
              0,
              1,
              4
            ]
          ],
          "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
          },
          "fills": [],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 0,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "layoutMode": "NONE",
          "itemSpacing": 0,
          "children": [
            {
              "id": "4:934",
              "name": "Symbol",
              "type": "TEXT",
              "x": 0,
              "y": 2,
              "width": 14.362500190734863,
              "height": 16,
              "relativeTransform": [
                [
                  1,
                  0,
                  0
                ],
                [
                  0,
                  1,
                  2
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [
                {
                  "type": "SOLID",
                  "visible": true,
                  "opacity": 1,
                  "blendMode": "NORMAL",
                  "color": {
                    "r": 0.9764705896377563,
                    "g": 0.9764705896377563,
                    "b": 0.9686274528503418
                  },
                  "boundVariables": {}
                }
              ],
              "strokes": [],
              "strokeWeight": 1,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "children": []
            }
          ]
        },
        {
          "id": "4:935",
          "name": "Item → Link",
          "type": "FRAME",
          "x": 85,
          "y": 4,
          "width": 14,
          "height": 20,
          "relativeTransform": [
            [
              1,
              0,
              85
            ],
            [
              0,
              1,
              4
            ]
          ],
          "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
          },
          "fills": [],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 0,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "layoutMode": "NONE",
          "itemSpacing": 0,
          "children": [
            {
              "id": "4:936",
              "name": "Symbol",
              "type": "TEXT",
              "x": 0,
              "y": 2,
              "width": 14.362500190734863,
              "height": 16,
              "relativeTransform": [
                [
                  1,
                  0,
                  0
                ],
                [
                  0,
                  1,
                  2
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [
                {
                  "type": "SOLID",
                  "visible": true,
                  "opacity": 1,
                  "blendMode": "NORMAL",
                  "color": {
                    "r": 0.9764705896377563,
                    "g": 0.9764705896377563,
                    "b": 0.9686274528503418
                  },
                  "boundVariables": {}
                }
              ],
              "strokes": [],
              "strokeWeight": 1,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": "4:937",
      "name": "Background+Shadow",
      "type": "FRAME",
      "x": 0,
      "y": 100,
      "width": 1920,
      "height": 60,
      "relativeTransform": [
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          100
        ]
      ],
      "constraints": {
        "horizontal": "STRETCH",
        "vertical": "MIN"
      },
      "fills": [
        {
          "type": "SOLID",
          "visible": true,
          "opacity": 1,
          "blendMode": "NORMAL",
          "color": {
            "r": 0.0941176488995552,
            "g": 0.20000000298023224,
            "b": 0.3294117748737335
          },
          "boundVariables": {}
        }
      ],
      "strokes": [],
      "strokeWeight": 1,
      "cornerRadius": 0,
      "effects": [
        {
          "type": "DROP_SHADOW",
          "visible": true,
          "radius": 14.999799728393555,
          "boundVariables": {},
          "color": {
            "r": 0.09803921729326248,
            "g": 0.09803921729326248,
            "b": 0.09803921729326248,
            "a": 0.10000000149011612
          },
          "offset": {
            "x": 0,
            "y": 9.999870300292969
          },
          "spread": 0,
          "blendMode": "NORMAL",
          "showShadowBehindNode": false
        }
      ],
      "blendMode": "PASS_THROUGH",
      "layoutAlign": "INHERIT",
      "layoutGrow": 0,
      "layoutMode": "NONE",
      "itemSpacing": 0,
      "children": [
        {
          "id": "4:938",
          "name": "List",
          "type": "FRAME",
          "x": 315,
          "y": 0,
          "width": 493.9200134277344,
          "height": 60,
          "relativeTransform": [
            [
              1,
              0,
              315
            ],
            [
              0,
              1,
              0
            ]
          ],
          "constraints": {
            "horizontal": "MIN",
            "vertical": "STRETCH"
          },
          "fills": [],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 0,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "layoutMode": "NONE",
          "itemSpacing": 0,
          "children": [
            {
              "id": "4:939",
              "name": "Item",
              "type": "FRAME",
              "x": 0,
              "y": 0,
              "width": 53.40999984741211,
              "height": 60,
              "relativeTransform": [
                [
                  1,
                  0,
                  0
                ],
                [
                  0,
                  1,
                  0
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "STRETCH"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "layoutMode": "NONE",
              "itemSpacing": 0,
              "children": [
                {
                  "id": "4:940",
                  "name": "Link",
                  "type": "FRAME",
                  "x": 0,
                  "y": 0,
                  "width": 53.40999984741211,
                  "height": 60,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      0
                    ]
                  ],
                  "constraints": {
                    "horizontal": "STRETCH",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "4:941",
                      "name": "Home",
                      "type": "TEXT",
                      "x": 0,
                      "y": 22.5,
                      "width": 39.980812072753906,
                      "height": 14,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          22.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.95686274766922,
                            "g": 0.4745098054409027,
                            "b": 0.42352941632270813
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    },
                    {
                      "id": "4:942",
                      "name": "Symbol",
                      "type": "TEXT",
                      "x": 44.65999984741211,
                      "y": 23,
                      "width": 8.949999809265137,
                      "height": 14,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          44.65999984741211
                        ],
                        [
                          0,
                          1,
                          23
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.95686274766922,
                            "g": 0.4745098054409027,
                            "b": 0.42352941632270813
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": "4:943",
              "name": "Item",
              "type": "FRAME",
              "x": 93.41000366210938,
              "y": 0,
              "width": 61.95000076293945,
              "height": 60,
              "relativeTransform": [
                [
                  1,
                  0,
                  93.41000366210938
                ],
                [
                  0,
                  1,
                  0
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "STRETCH"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "layoutMode": "NONE",
              "itemSpacing": 0,
              "children": [
                {
                  "id": "4:944",
                  "name": "Link",
                  "type": "FRAME",
                  "x": 0,
                  "y": 0,
                  "width": 61.95000076293945,
                  "height": 60,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      0
                    ]
                  ],
                  "constraints": {
                    "horizontal": "STRETCH",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "4:945",
                      "name": "About Us",
                      "type": "TEXT",
                      "x": 0,
                      "y": 22.5,
                      "width": 62.34046936035156,
                      "height": 14,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          22.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": "4:946",
              "name": "Item",
              "type": "FRAME",
              "x": 195.36000061035156,
              "y": 0,
              "width": 73.5,
              "height": 60,
              "relativeTransform": [
                [
                  1,
                  0,
                  195.36000061035156
                ],
                [
                  0,
                  1,
                  0
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "STRETCH"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "layoutMode": "NONE",
              "itemSpacing": 0,
              "children": [
                {
                  "id": "4:947",
                  "name": "Link",
                  "type": "FRAME",
                  "x": 0,
                  "y": 0,
                  "width": 73.5,
                  "height": 60,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      0
                    ]
                  ],
                  "constraints": {
                    "horizontal": "STRETCH",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "4:948",
                      "name": "Features",
                      "type": "TEXT",
                      "x": 0,
                      "y": 22.5,
                      "width": 60.13359451293945,
                      "height": 14,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          22.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    },
                    {
                      "id": "4:949",
                      "name": "Symbol",
                      "type": "TEXT",
                      "x": 64.75,
                      "y": 23,
                      "width": 8.949999809265137,
                      "height": 14,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          64.75
                        ],
                        [
                          0,
                          1,
                          23
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.4274509847164154,
                            "g": 0.4588235318660736,
                            "b": 0.49803921580314636
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": "4:950",
              "name": "Item",
              "type": "FRAME",
              "x": 308.8599853515625,
              "y": 0,
              "width": 89.05999755859375,
              "height": 60,
              "relativeTransform": [
                [
                  1,
                  0,
                  308.8599853515625
                ],
                [
                  0,
                  1,
                  0
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "STRETCH"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "layoutMode": "NONE",
              "itemSpacing": 0,
              "children": [
                {
                  "id": "4:951",
                  "name": "Link",
                  "type": "FRAME",
                  "x": 0,
                  "y": 0,
                  "width": 89.05999755859375,
                  "height": 60,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      0
                    ]
                  ],
                  "constraints": {
                    "horizontal": "STRETCH",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "4:952",
                      "name": "Categories",
                      "type": "TEXT",
                      "x": 0,
                      "y": 22.5,
                      "width": 75.62611389160156,
                      "height": 14,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          22.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    },
                    {
                      "id": "4:953",
                      "name": "Symbol",
                      "type": "TEXT",
                      "x": 80.30999755859375,
                      "y": 23,
                      "width": 8.949999809265137,
                      "height": 14,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          80.30999755859375
                        ],
                        [
                          0,
                          1,
                          23
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.4274509847164154,
                            "g": 0.4588235318660736,
                            "b": 0.49803921580314636
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": "4:954",
              "name": "Item",
              "type": "FRAME",
              "x": 437.9200134277344,
              "y": 0,
              "width": 56,
              "height": 60,
              "relativeTransform": [
                [
                  1,
                  0,
                  437.9200134277344
                ],
                [
                  0,
                  1,
                  0
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "STRETCH"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "layoutMode": "NONE",
              "itemSpacing": 0,
              "children": [
                {
                  "id": "4:955",
                  "name": "Link",
                  "type": "FRAME",
                  "x": 0,
                  "y": 0,
                  "width": 56,
                  "height": 60,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      0
                    ]
                  ],
                  "constraints": {
                    "horizontal": "STRETCH",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "4:956",
                      "name": "Contact",
                      "type": "TEXT",
                      "x": 0,
                      "y": 22.5,
                      "width": 56.37187576293945,
                      "height": 14,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          22.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "4:957",
          "name": "List",
          "type": "FRAME",
          "x": 1110,
          "y": 18,
          "width": 495,
          "height": 30,
          "relativeTransform": [
            [
              1,
              0,
              1110
            ],
            [
              0,
              1,
              18
            ]
          ],
          "constraints": {
            "horizontal": "STRETCH",
            "vertical": "MIN"
          },
          "fills": [],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 0,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "layoutMode": "NONE",
          "itemSpacing": 0,
          "children": [
            {
              "id": "4:958",
              "name": "Item → Link",
              "type": "FRAME",
              "x": 266.19000244140625,
              "y": 0,
              "width": 24,
              "height": 30,
              "relativeTransform": [
                [
                  1,
                  0,
                  266.19000244140625
                ],
                [
                  0,
                  1,
                  0
                ]
              ],
              "constraints": {
                "horizontal": "STRETCH",
                "vertical": "MIN"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "layoutMode": "NONE",
              "itemSpacing": 0,
              "children": [
                {
                  "id": "4:959",
                  "name": "Icon",
                  "type": "FRAME",
                  "x": 0,
                  "y": 23,
                  "width": 24,
                  "height": 24,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      -1,
                      23
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "4:960",
                      "name": "Vector",
                      "type": "VECTOR",
                      "x": 2.682209014892578e-7,
                      "y": 1.3600002527236938,
                      "width": 24,
                      "height": 21.35999870300293,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          2.682209014892578e-7
                        ],
                        [
                          0,
                          1,
                          1.3600002527236938
                        ]
                      ],
                      "constraints": {
                        "horizontal": "SCALE",
                        "vertical": "SCALE"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.5647059082984924,
                            "g": 0.658823549747467,
                            "b": 0.772549033164978
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 0.07999999821186066,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                },
                {
                  "id": "4:961",
                  "name": "Background",
                  "type": "FRAME",
                  "x": 16,
                  "y": -3,
                  "width": 18,
                  "height": 18,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      16
                    ],
                    [
                      0,
                      1,
                      -3
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MAX",
                    "vertical": "MIN"
                  },
                  "fills": [
                    {
                      "type": "SOLID",
                      "visible": true,
                      "opacity": 1,
                      "blendMode": "NORMAL",
                      "color": {
                        "r": 0.95686274766922,
                        "g": 0.4745098054409027,
                        "b": 0.42352941632270813
                      },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 9,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "4:962",
                      "name": "0",
                      "type": "TEXT",
                      "x": 5.329999923706055,
                      "y": 2,
                      "width": 7.698500156402588,
                      "height": 14,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          5.329999923706055
                        ],
                        [
                          0,
                          1,
                          2
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": "4:963",
              "name": "Item → Link",
              "type": "FRAME",
              "x": 315.19000244140625,
              "y": 0,
              "width": 24,
              "height": 24,
              "relativeTransform": [
                [
                  1,
                  0,
                  315.19000244140625
                ],
                [
                  0,
                  1,
                  0
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "CENTER"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "layoutMode": "NONE",
              "itemSpacing": 0,
              "children": [
                {
                  "id": "4:964",
                  "name": "Icon",
                  "type": "FRAME",
                  "x": 0,
                  "y": 24,
                  "width": 24,
                  "height": 24,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      -1,
                      24
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "4:965",
                      "name": "Vector",
                      "type": "VECTOR",
                      "x": 0.2200002670288086,
                      "y": 1.9200001955032349,
                      "width": 23.559999465942383,
                      "height": 20.12444496154785,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0.2200002670288086
                        ],
                        [
                          0,
                          1,
                          1.9200001955032349
                        ]
                      ],
                      "constraints": {
                        "horizontal": "SCALE",
                        "vertical": "SCALE"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.5647059082984924,
                            "g": 0.658823549747467,
                            "b": 0.772549033164978
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 0.07999999821186066,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                },
                {
                  "id": "4:966",
                  "name": "Background",
                  "type": "FRAME",
                  "x": 16,
                  "y": -4,
                  "width": 18,
                  "height": 18,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      16
                    ],
                    [
                      0,
                      1,
                      -4
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MAX",
                    "vertical": "MIN"
                  },
                  "fills": [
                    {
                      "type": "SOLID",
                      "visible": true,
                      "opacity": 1,
                      "blendMode": "NORMAL",
                      "color": {
                        "r": 0.95686274766922,
                        "g": 0.4745098054409027,
                        "b": 0.42352941632270813
                      },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 9,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "4:967",
                      "name": "0",
                      "type": "TEXT",
                      "x": 5.329999923706055,
                      "y": 2,
                      "width": 7.698500156402588,
                      "height": 14,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          5.329999923706055
                        ],
                        [
                          0,
                          1,
                          2
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": "4:968",
              "name": "Item → Link",
              "type": "FRAME",
              "x": 364.19000244140625,
              "y": 0,
              "width": 130.80999755859375,
              "height": 24,
              "relativeTransform": [
                [
                  1,
                  0,
                  364.19000244140625
                ],
                [
                  0,
                  1,
                  0
                ]
              ],
              "constraints": {
                "horizontal": "STRETCH",
                "vertical": "MIN"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "layoutMode": "NONE",
              "itemSpacing": 0,
              "children": [
                {
                  "id": "4:969",
                  "name": "Icon",
                  "type": "FRAME",
                  "x": 0,
                  "y": 24,
                  "width": 24,
                  "height": 24,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      -1,
                      24
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "4:970",
                      "name": "Vector",
                      "type": "VECTOR",
                      "x": 0,
                      "y": 0,
                      "width": 24,
                      "height": 24,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          0
                        ]
                      ],
                      "constraints": {
                        "horizontal": "SCALE",
                        "vertical": "SCALE"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.5647059082984924,
                            "g": 0.658823549747467,
                            "b": 0.772549033164978
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 0.07999999821186066,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                },
                {
                  "id": "4:971",
                  "name": "Sign In",
                  "type": "TEXT",
                  "x": 34,
                  "y": 3,
                  "width": 46.78199768066406,
                  "height": 17,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      34
                    ],
                    [
                      0,
                      1,
                      3
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [
                    {
                      "type": "SOLID",
                      "visible": true,
                      "opacity": 1,
                      "blendMode": "NORMAL",
                      "color": {
                        "r": 1,
                        "g": 1,
                        "b": 1
                      },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}