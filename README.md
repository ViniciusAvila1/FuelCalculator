# Calculadora de Combustível

**Projeto:** Uma ferramenta simples para ajudar motoristas a decidir se é mais vantajoso abastecer com álcool ou gasolina com base no preço atual dos combustíveis.

## Funcionalidades

- **Entrada de preços:** Permite inserir os valores por litro de álcool e gasolina.
- **Cálculo automático:** Utiliza a relação 0.7 como referência para indicar o combustível mais vantajoso.
- **Página informativa:** Explica como o cálculo é realizado com exemplos práticos.

## Tecnologias Utilizadas

- **HTML5:** Estrutura do site.
- **CSS3:** Estilização da interface.
- **JavaScript:** Lógica de cálculo e interatividade.

## Como Usar

1. Acesse a calculadora pelo link:  
   **[Calculadora de Combustível no GitHub Pages](https://viniciusavila1.github.io/FuelCalculator/)**
2. Insira os preços dos combustíveis e clique em "Calcular".
3. O resultado será exibido indicando qual opção é mais vantajosa.

## Detalhes do Cálculo

A fórmula usada é a seguinte:

- Dividimos o valor do litro do álcool pelo da gasolina.
- Se o resultado for menor que 0.7, **compensa usar álcool**.
- Caso contrário, **compensa usar gasolina**.

Exemplo:

- Álcool: R$ 3,29
- Gasolina: R$ 4,92
- Resultado: \( 3,29 \div 4,92 = 0,67 \)
- Como \( 0,67 < 0,7 \), a recomendação é **álcool**.

Mais detalhes podem ser encontrados na página **"Entenda como o cálculo é feito"**.

## Estrutura do Projeto

- `index.html`: Página principal da calculadora.
- `about.html`: Página explicativa do cálculo.
- `script.js`: Lógica do cálculo em JavaScript.
- `style.css`: Estilização do projeto.
- `/assets`: Imagens do logo e ícone de informação.

## Melhorias Futuras

- Adicionar responsividade ao design.
- Suporte para diferentes moedas e formatos de entrada.
