// pages/api/testConnection.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../src/lib/database'; // Importando a função connectDB

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const connection = await connectDB();
    if (connection) {
      console.log('Conexão bem-sucedida com o banco de dados');
      res.status(200).json({ message: 'Conexão bem-sucedida com o banco de dados!' });
      connection.end(); // Fecha a conexão
    } else {
      console.error('Erro ao conectar ao banco de dados');
      res.status(500).json({ error: 'Erro ao conectar ao banco de dados' });
    }
  } catch (error: unknown) {
    // Asserção de tipo para garantir que o erro seja um objeto com uma mensagem
    if (error instanceof Error) {
      console.error('Erro ao conectar ao banco de dados:', error.message);
      res.status(500).json({ error: error.message });
    } else {
      // Caso o erro não seja uma instância de Error
      console.error('Erro desconhecido:', error);
      res.status(500).json({ error: 'Erro desconhecido' });
    }
  }
}
