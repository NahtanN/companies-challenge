# Existem duas formas de rodar o projeto:

## 1. Docker compose

```bash
docker compose up -d
```

O front vai rodar na url `http://localhost:4200`
O back vai rodar na url `http://localhost:3000`
O documentação swagger na url `http://localhost:3000/docs`
Existe um arquivo Insonmia que pode ser importado para testar as rotas.

## 2. Rodar localmente

### 2.1. Rodar o back

```bash
cd api
```

Rodar o banco de dados

```bash
docker compose up -d
```

Instalar as dependências

```bash
npm install
```

Rodar o back

```bash
npm run start:dev
```

O `start:dev` também roda as migrations

### 2.2. Rodar o front

```bash
cd frontend
```

Instalar as dependências

```bash
npm install
```

Rodar o front

```bash
npm start
```

### Schema do banco de dados

[Schema](./companies_schema.png)
