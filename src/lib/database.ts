// src/lib/database.ts

import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,  
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function connectDB() {
  try {
    console.log('Tentando conectar ao MySQL...');
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: 'lady_store',
    });

    console.log('Conectado ao MySQL');
    return connection;  // Retorna a conexão estabelecida
  } catch (error) {
    console.error('Erro ao conectar ao MySQL:', error);
    return null;  // Caso ocorra algum erro, retorna null
  }
}
