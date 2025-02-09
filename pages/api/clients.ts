import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../src/lib/database';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Conectar ao banco de dados
  const connection = connectDB();

  if (!connection) {
    return res.status(500).json({ error: 'Erro ao conectar ao banco de dados' });
  }

  // Consultar todos os clientes
  connection.query('SELECT * FROM Cliente', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
    res.status(200).json(results);
  });
}
