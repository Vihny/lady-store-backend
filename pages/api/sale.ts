import { NextApiRequest, NextApiResponse } from 'next';
import { getAllSales, getSaleById, createSale, updateSale } from '../../src/models/Sale'; // Ajuste o caminho de importação

// Função para retornar todos os registros de vendas
const getSales = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const sales = await getAllSales();  // Obtém todas as vendas
    res.status(200).json(sales);  // Retorna os dados de vendas no formato JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar as vendas' });  // Em caso de erro, retorna o erro
  }
};

// Função para retornar uma venda específica pelo ID
const getSale = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;  // Pega o ID da venda pela query params
  if (typeof id === 'string') {  // Verifica se o ID é uma string válida
    try {
      const sale = await getSaleById(parseInt(id));  // Obtém a venda pelo ID
      if (sale) {
        res.status(200).json(sale);  // Retorna a venda no formato JSON
      } else {
        res.status(404).json({ error: 'Venda não encontrada' });  // Se não encontrar, retorna erro 404
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar a venda' });  // Em caso de erro, retorna o erro
    }
  } else {
    res.status(400).json({ error: 'ID inválido' });  // Se o ID for inválido, retorna erro 400
  }
};

// Função para criar uma nova venda
const createNewSale = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const saleData = req.body;  // Pega os dados da venda do corpo da requisição
      const sale = await createSale(saleData);  // Cria a venda no banco de dados
      res.status(201).json(sale);  // Retorna a venda criada com status 201
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar a venda' });  // Em caso de erro, retorna o erro
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });  // Se não for POST, retorna erro 405
  }
};

// Função para atualizar uma venda existente
const updateExistingSale = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;  // Pega o ID da venda pela query params
  if (typeof id === 'string') {
    try {
      const saleData = req.body;  // Pega os dados de atualização da venda
      const updatedSale = await updateSale(parseInt(id), saleData);  // Atualiza a venda no banco
      if (updatedSale) {
        res.status(200).json(updatedSale);  // Retorna a venda atualizada
      } else {
        res.status(404).json({ error: 'Venda não encontrada' });  // Se não encontrar, retorna erro 404
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar a venda' });  // Em caso de erro, retorna o erro
    }
  } else {
    res.status(400).json({ error: 'ID inválido' });  // Se o ID for inválido, retorna erro 400
  }
};

// Roteamento da API com base no método HTTP
export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      if (req.query.id) {
        return getSale(req, res);  // Chama a função para obter a venda por ID
      } else {
        return getSales(req, res);  // Chama a função para obter todas as vendas
      }
    case 'POST':
      return createNewSale(req, res);  // Chama a função para criar uma nova venda
    case 'PUT':
      return updateExistingSale(req, res);  // Chama a função para atualizar uma venda existente
    default:
      res.status(405).json({ error: 'Método não permitido' });  // Caso o método não seja GET, POST ou PUT
  }
};
