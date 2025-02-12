import { Request, Response } from 'express';
import financialService from './financial.service';

class FinancialController {
  async create(req: Request, res: Response) {
    try {
      const financial = await financialService.createFinancial(req.body);
      res.status(201).json(financial);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const financials = await financialService.findAllFinancials(req.query);
      res.json(financials);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const financial = await financialService.findFinancialById(Number(req.params.id));
      res.json(financial);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const financial = await financialService.updateFinancial(Number(req.params.id), req.body);
      res.json(financial);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await financialService.deleteFinancial(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new FinancialController();
