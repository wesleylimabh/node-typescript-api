<h1 align="center">
  Node.js API com Typescript
</h1>

<p align="center">
  <a href="#💻-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#🚀-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#🔧-building">Building</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#🚦-testes">Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#📝-licença">Licença</a>
</p>

<br>

## 💻 Projeto

Esse projeto foi desenvolvido durante o curso **DO ZERO A PRODUÇÃO: APRENDA A CONSTRUIR UMA API NODE.JS COM TYPESCRIPT**, promovido de forma gratúita pelo instrutor Waldemar Neto no Youtube e que pode ser acessado a partir [deste link](https://www.youtube.com/playlist?list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh)


## 🚀 Tecnologias

Foi utilizado as seguintes tecnologias:

- 🧰 Typescript

- 💻 Node.js, Express, OvernightJS

- ✅ TDD, Jest

- 📦 MongoDB

- 🛠 Github Actions

## 🔧 Building

A aplicação utiliza um banco de dados MongoDB, desta forma, é necessário fornecer uma string de conexão válida para um banco Mongo. Essa string pode ser fornecida alterando o arquivo de configuração o valor de `database.mongoUrl` ou fornecido como uma variável de ambiente nomeada como `MONGODB_URL`.

É necessário também um token válido para acesso a api do Stormglass.
Este token pode ser adquirido após cadatro em [Stormglass](https://dashboard.stormglass.io/register).

De posse de um token válido, este deve ser alterado no arquivo de configuração, na propriedade `resources.StormGlass.apiToken` ou fornecido como uma variável de ambiente nomeada como `STORM_GLASS_API_TOKEN`.

Você precisará do [Node.js](https://nodejs.org) instalado na seu computador e seguir os passos abaixo para construir a aplicação.

```bash
$ git clone https://github.com/wesleylimabh/node-typescript-api.git
$ cd node-typescript-api
$ yarn install
$ yarn start:dev
```

Desta forma a aplicação será executada em modo de **desenvolvimento**.
<br/>

Para executar a aplicação em ambiente de **produção**, deve ser utilizado o script abaixo que irá transpilar o typescript e depois executar o javascript obtido neste processo:

```bash
$ yarn start
```

## 🚦 Testes

Após instalado as dependências, os testes podem ser executados com o seguinte comando:

```bash
$ yarn test
```

## 📝 Licença

Esse projeto está sob a licença MIT.
