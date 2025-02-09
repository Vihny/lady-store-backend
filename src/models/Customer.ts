import { pool } from "../lib/database"; // Importando a conexão com o banco
import { RowDataPacket, ResultSetHeader } from "mysql2"; // Importando os tipos corretos

// Interface para os dados do cliente
export interface Customer {
  id: number;
  name: string;
  cpf?: string;
  birthdate?: string;
  email: string;
  phone: string;
}

// Função para obter todos os clientes
export const getAllCustomers = async (): Promise<Customer[]> => {
  const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Customer');
  return rows as Customer[];
};

// Função para obter um cliente por ID
export const getCustomerById = async (id: number): Promise<Customer | null> => {
  const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Customer WHERE id = ?', [id]);
  const customers = rows as Customer[];
  return customers.length > 0 ? customers[0] : null;
};

// Função para obter um cliente por CPF ou email
export const getCustomerByCpfOrEmail = async (cpf: string, email: string): Promise<Customer | null> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    'SELECT * FROM Customer WHERE cpf = ? OR email = ?',
    [cpf, email]
  );
  const customers = rows as Customer[];
  return customers.length > 0 ? customers[0] : null;
};

// Função para criar um novo cliente
export const createCustomer = async (customer: Customer): Promise<Customer> => {
  const { name, cpf, birthdate, email, phone } = customer;
  const [result] = await pool.execute<ResultSetHeader>(
    'INSERT INTO Customer (name, cpf, birthdate, email, phone) VALUES (?, ?, ?, ?, ?)',
    [name, cpf, birthdate, email, phone]
  );
  
  return { id: result.insertId, name, cpf, birthdate, email, phone };
};

// Função para atualizar os dados de um cliente
export const updateCustomer = async (id: number, data: Partial<Customer>): Promise<Customer | null> => {
  const { name, email, cpf, birthdate, phone } = data;
  
  await pool.execute<ResultSetHeader>(
    `UPDATE Customer SET 
      name = ?, email = ?, cpf = ?, birthdate = ?, phone = ? 
    WHERE id = ?`,
    [name, email, cpf, birthdate, phone, id]
  );

  return await getCustomerById(id);
};
