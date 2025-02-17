# Lady Store Backend 👠

## Descrição
Este é o backend da aplicação **Lady Store**, uma plataforma de e-commerce para venda de produtos de moda. O backend foi desenvolvido utilizando **Node.js**, **Express**, e **Prisma** com **MySQL** como banco de dados. Ele fornece uma API RESTful para gerenciar clientes, fornecedores, produtos, vendas e transações financeiras.

## Tecnologias Usadas
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## Instalação

### Pré-requisitos
Antes de rodar o projeto, você precisa ter o seguinte instalado:
- [Node.js](https://nodejs.org) 
- [MySQL](https://www.mysql.com) 

### Passos de Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/Vihny/lady-store-backend.git
   cd lady-store-backend

2. Instale as dependências do projeto:

    ```bash
    npm install

3. Crie o banco de dados manualmente no MySQL, abra o terminal e execute o MySQL localmente para criar o banco de dados:
        
    ```bash
    mysql -u root -p
    CREATE DATABASE lady_store;

4. Crie um arquivo .env na raiz do projeto como o env.example, e adicione as seguintes variáveis de ambiente:

    ```bash
    DATABASE_URL="mysql://user:password@localhost:3306/lady_store"


5. Rode as migrações do Prisma para criar o banco de dados e suas tabelas:

    ```bash
    npx prisma migrate dev

6. Inicie o servidor:

    ```bash
    npm start

Agora, a API estará rodando no http://localhost:5000.

## Licença
Este projeto está licenciado sob a MIT License. Você é livre para usar, modificar, distribuir e sublicenciar este código, desde que forneça a devida atribuição, conforme descrito na licença.