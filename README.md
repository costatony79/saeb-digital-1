# Meu SAEB Digital

Atividades para os alunos treinarem os descritores da prova do SAEB: 15 de
Língua Portuguesa (D1 a D15) e 28 de Matemática (D1 a D28), com 10 questões cada.

O aluno digita o nome, responde as questões e, ao clicar em **RESPONDER**, vê na
hora as suas respostas, quantos pontos fez e uma mensagem de acordo com o resultado.
Ele pode refazer a atividade quantas vezes quiser.

## Como funciona

É um **site estático**: só HTML, CSS e JavaScript, sem servidor e sem banco de dados.
A correção acontece no próprio navegador do aluno (`js/atividade.js`), e o resultado
aparece só para ele. **Nada é salvo**: ao sair da página, a nota não fica registrada.

Os gabaritos ficam em `js/gabaritos.js`, embaralhados para que o aluno não veja as
respostas só abrindo o código-fonte da página. Isso dificulta, mas não impede: um
aluno com conhecimento técnico conseguiria descobrir o gabarito.

## Publicar no GitHub Pages

1. No GitHub, abra o repositório e vá em **Settings > Pages**.
2. Em **Build and deployment > Source**, escolha **Deploy from a branch**.
3. Em **Branch**, escolha `main` e a pasta `/ (root)`, e clique em **Save**.
4. Em um ou dois minutos, o site fica disponível em
   `https://costatony79.github.io/saeb-digital-1/`.

A cada alteração enviada para o GitHub, o site se atualiza sozinho.

## Testar no computador

Basta abrir o arquivo `index.html` no navegador, com dois cliques.

## Mudar um gabarito

Com o [Node.js](https://nodejs.org) instalado, abra o terminal na pasta do projeto:

```bash
# ver o gabarito atual do D1 de Português
node ferramentas/gabarito.js lpd1

# gravar um gabarito novo para o D5 de Matemática (10 letras, de A a D)
node ferramentas/gabarito.js md5 ABCDABCDAB
```

Os nomes das atividades são os mesmos dos arquivos: `lpd1` a `lpd15` para
Língua Portuguesa e `md1` a `md28` para Matemática.

## Versão anterior

A versão antiga, com servidor Node.js/Express, continua no histórico do repositório,
no commit `1bf43e1`.
