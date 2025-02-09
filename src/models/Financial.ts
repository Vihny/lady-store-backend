import { pool } from "../lib/database"; // Importando a conexão com o banco
import { RowDataPacket, ResultSetHeader } from "mysql2/promise"; // Importação correta dos tipos

export interface Financial {
  id: number;
  operation_date: string;
  operation_type: string;
  amount: number;
  description?: string;
  sale_id: number;
}

// Função para obter todas as transações financeiras
export const getAllFinancials = async (): Promise<Financial[]> => {
  const [rows] = await pool.execute<RowDataPacket[]>("SELECT * FROM Financial");
  return rows as Financial[];
};

// Função para obter uma transação financeira por ID
export const getFinancialById = async (id: number): Promise<Financial | null> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM Financial WHERE id = ?",
    [id]
  );
  const financials = rows as Financial[];
  return financials.length > 0 ? financials[0] : null;
};

// Função para criar uma nova transação financeira
export const createFinancial = async (financial: Financial): Promise<Financial> => {
  const { operation_date, operation_type, amount, description, sale_id } = financial;
  const [result] = await pool.execute<ResultSetHeader>(
    "INSERT INTO Financial (operation_date, operation_type, amount, description, sale_id) VALUES (?, ?, ?, ?, ?)",
    [operation_date, operation_type, amount, description, sale_id]
  );

  return {
    id: result.insertId,
    operation_date,
    operation_type,
    amount,
    description,
    sale_id,
  };
};

// Função para atualizar uma transação financeira
export const updateFinancial = async (id: number, data: Partial<Financial>): Promise<Financial | null> => {
  const { operation_date, operation_type, amount, description, sale_id } = data;
  
  await pool.execute(
    `UPDATE Financial SET 
      operation_date = ?, operation_type = ?, amount = ?, description = ?, sale_id = ?
    WHERE id = ?`,
    [operation_date, operation_type, amount, description, sale_id, id]
  );

  return await getFinancialById(id);
};

// Função para deletar uma transação financeira
export const deleteFinancial = async (id: number): Promise<void> => {
  await pool.execute("DELETE FROM Financial WHERE id = ?", [id]);
};
