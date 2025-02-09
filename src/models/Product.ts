import { pool } from "../lib/database"; // Supondo que você tenha uma conexão com o banco

export interface Product {
  id: number;
  name: string;
  brand: string;
  model: string;
  type: string;
  size: string;
  color: string;
  price: number;
  supplier_id: number;
}

export const getAllProducts = async (): Promise<Product[]> => {
  const [rows]: any = await pool.execute('SELECT * FROM Product'); // Forçar o tipo `any` e depois realizar a conversão
  return rows as Product[]; // Aqui forçamos o tipo
}

export const getProductById = async (id: number): Promise<Product | null> => {
  const [rows]: any = await pool.execute('SELECT * FROM Product WHERE id = ?', [id]);
  return rows[0] ? (rows[0] as Product) : null; // Acessando o primeiro item de `rows` de forma segura
}

export const createProduct = async (product: Product): Promise<Product> => {
  const { name, brand, model, type, size, color, price, supplier_id } = product;
  const [result]: any = await pool.execute(
    'INSERT INTO Product (name, brand, model, type, size, color, price, supplier_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [name, brand, model, type, size, color, price, supplier_id]
  );

  return { id: result.insertId, name, brand, model, type, size, color, price, supplier_id };
}

export const updateProduct = async (id: number, data: Partial<Product>): Promise<Product | null> => {
  const { name, brand, model, type, size, color, price, supplier_id } = data;

  await pool.execute(
    `UPDATE Product SET 
      name = ?, brand = ?, model = ?, type = ?, size = ?, color = ?, price = ?, supplier_id = ?
    WHERE id = ?`,
    [name, brand, model, type, size, color, price, supplier_id, id]
  );

  return await getProductById(id);
}
