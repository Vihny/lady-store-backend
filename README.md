### LadyStore Server

Servidor que atende às demandas da LadyStore, uma loja de vestuário, nas atividades internas, como o gerenciamento de clientes e fornecedores, além do registro de vendas.

![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

### 🛠️ Instalação e Configuração

O sistema foi desenvolvido utilizando **Node.js 16.x**, **Next.js** com **TypeScript** e **MySQL**. Certifique-se de que essas versões estejam instaladas para garantir a compatibilidade.

#### 1️⃣ Clonar o Repositório

Adquira uma cópia local do código-fonte utilizando o seguinte comando:

```bash
git clone https://github.com/Vihny/lady-store-backend.git
```

#### 2️⃣ Instalar as Dependências

No diretório da aplicação, instale as dependências utilizando o npm ou yarn:

```bash
npm install
# ou
yarn install
```

#### 3️⃣ Configurar as Variáveis de Ambiente

Crie um arquivo .env.local com base no modelo fornecido em .env.example. Neste arquivo, especifique os seguintes campos:

```
# Configurações do banco de dados MySQL
DB_HOST=localhost        # O endereço do servidor MySQL. Por padrão, 'localhost' se o banco estiver na mesma máquina.
DB_USER=vini             # Nome de usuário para acessar o banco de dados MySQL.
DB_PASSWORD=bro123       # Senha para o usuário do banco de dados.
DB_DATABASE=lady_store   # Nome do banco de dados a ser utilizado.
DB_PORT=3306             # Porta na qual o MySQL está rodando (por padrão, 3306).

# Configurações do servidor
# Use uma chave secreta longa e única para proteger o servidor
SECRET_KEY=supersecreta12345678
```

#### 4️⃣ Executar

Após concluir as etapas anteriores, você poderá inicializar o servidor com o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```
O servidor estará disponível em http://localhost:3000.
