import { pool } from "../lib/database"; // Importando a conexão com o banco
import { RowDataPacket, ResultSetHeader} from "mysql2"; // Importando RowDataPacket

export interface Sale {
  id: number;
  sale_date: string;
  sale_state: string;
  observation?: string;
  product_id: number;
  customer_id: number;
  stock_id: number;
}

export const getAllSales = async (): Promise<Sale[]> => {
  const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Sale');
  return rows.map((row) => row as Sale);
}

export const getSaleById = async (id: number): Promise<Sale | null> => {
  const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Sale WHERE id = ?', [id]);
  return rows.length > 0 ? (rows[0] as Sale) : null;
}

export const createSale = async (sale: Sale): Promise<Sale> => {
  const { sale_date, sale_state, observation, product_id, customer_id, stock_id } = sale;
  const [result] = await pool.execute<ResultSetHeader>(
    'INSERT INTO Sale (sale_date, sale_state, observation, product_id, customer_id, stock_id) VALUES (?, ?, ?, ?, ?, ?)',
    [sale_date, sale_state, observation, product_id, customer_id, stock_id]
  );
  
  return { id: result.insertId, sale_date, sale_state, observation, product_id, customer_id, stock_id };
}

export const updateSale = async (id: number, data: Partial<Sale>): Promise<Sale | null> => {
  const { sale_date, sale_state, observation, product_id, customer_id, stock_id } = data;
  
  await pool.execute(
    `UPDATE Sale SET 
      sale_date = ?, sale_state = ?, observation = ?, product_id = ?, customer_id = ?, stock_id = ? 
    WHERE id = ?`,
    [sale_date, sale_state, observation, product_id, customer_id, stock_id, id]
  );

  return await getSaleById(id);
}
