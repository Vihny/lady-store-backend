import { NextApiRequest, NextApiResponse } from "next";
import { getAllCustomers, getCustomerById, getCustomerByCpfOrEmail, createCustomer, updateCustomer } from "../../src/models/Customer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      if (req.query.id) {
        const customer = await getCustomerById(Number(req.query.id));
        if (customer) {
          res.status(200).json(customer);
        } else {
          res.status(404).json({ error: "Cliente não encontrado" });
        }
      } else {
        const customers = await getAllCustomers();
        res.status(200).json(customers);
      }
      break;

    case "POST":
      try {
        const customer = await createCustomer(req.body);
        res.status(201).json(customer);
      } catch (error) {
        res.status(500).json({ error: "Erro ao criar cliente" });
      }
      break;

    case "PUT":
      const { id } = req.query;
      if (id) {
        const updatedCustomer = await updateCustomer(Number(id), req.body);
        if (updatedCustomer) {
          res.status(200).json(updatedCustomer);
        } else {
          res.status(404).json({ error: "Cliente não encontrado" });
        }
      } else {
        res.status(400).json({ error: "ID do cliente é necessário" });
      }
      break;

    default:
      res.status(405).json({ error: `Método ${method} não permitido` });
      break;
  }
}
