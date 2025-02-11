import { Request, Response } from 'express';
import saleService from './sale.service';

class SaleController {
  async create(req: Request, res: Response) {
    try {
      const sale = await saleService.createSale(req.body);
      res.status(201).json(sale);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const sales = await saleService.findAllSales(req.query);
      res.json(sales);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const sale = await saleService.findSaleById(Number(req.params.id));
      res.json(sale);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const sale = await saleService.updateSale(Number(req.params.id), req.body);
      res.json(sale);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await saleService.deleteSale(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new SaleController();
