import { NextApiRequest, NextApiResponse } from "next";
import { getAllFinancials, createFinancial } from "../../src/models/Financial";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const financials = await getAllFinancials();
      return res.status(200).json(financials);
    }

    if (req.method === "POST") {
      const newFinancial = await createFinancial(req.body);
      return res.status(201).json(newFinancial);
    }

    return res.status(405).json({ error: "Método não permitido" });
  } catch (error) {
    console.error("Erro na API de financials:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}
