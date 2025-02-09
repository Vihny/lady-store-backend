import { NextApiRequest, NextApiResponse } from 'next';
import { getAllProducts, getProductById, createProduct, updateProduct } from '../../src/models/Product'; // Ajuste o caminho de importação

// Função para retornar todos os produtos
const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await getAllProducts();  // Obtém todos os produtos
    res.status(200).json(products);  // Retorna os dados dos produtos no formato JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os produtos' });  // Em caso de erro, retorna o erro
  }
};

// Função para retornar um produto específico pelo ID
const getProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;  // Pega o ID do produto pela query params
  if (typeof id === 'string') {  // Verifica se o ID é uma string válida
    try {
      const product = await getProductById(parseInt(id));  // Obtém o produto pelo ID
      if (product) {
        res.status(200).json(product);  // Retorna o produto no formato JSON
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });  // Se não encontrar, retorna erro 404
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar o produto' });  // Em caso de erro, retorna o erro
    }
  } else {
    res.status(400).json({ error: 'ID inválido' });  // Se o ID for inválido, retorna erro 400
  }
};

// Função para criar um novo produto
const createNewProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const productData = req.body;  // Pega os dados do produto no corpo da requisição
      const product = await createProduct(productData);  // Cria o produto no banco
      res.status(201).json(product);  // Retorna o produto criado com status 201
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar o produto' });  // Em caso de erro, retorna o erro
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });  // Se não for POST, retorna erro 405
  }
};

// Função para atualizar um produto existente
const updateExistingProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;  // Pega o ID do produto pela query params
  if (typeof id === 'string') {
    try {
      const productData = req.body;  // Pega os dados de atualização do produto
      const updatedProduct = await updateProduct(parseInt(id), productData);  // Atualiza o produto no banco
      if (updatedProduct) {
        res.status(200).json(updatedProduct);  // Retorna o produto atualizado
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });  // Se não encontrar, retorna erro 404
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar o produto' });  // Em caso de erro, retorna o erro
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
        return getProduct(req, res);  // Chama a função para obter o produto por ID
      } else {
        return getProducts(req, res);  // Chama a função para obter todos os produtos
      }
    case 'POST':
      return createNewProduct(req, res);  // Chama a função para criar um novo produto
    case 'PUT':
      return updateExistingProduct(req, res);  // Chama a função para atualizar um produto existente
    default:
      res.status(405).json({ error: 'Método não permitido' });  // Caso o método não seja GET, POST ou PUT
  }
};
