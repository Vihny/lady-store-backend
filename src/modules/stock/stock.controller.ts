import { Request, Response } from 'express';
import stockService from './stock.service';

class StockController {
  async create(req: Request, res: Response) {
    try {
      const stock = await stockService.createStock(req.body);
      res.status(201).json(stock);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const stocks = await stockService.findAllStocks(req.query);
      res.json(stocks);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const stock = await stockService.findStockById(Number(req.params.id));
      res.json(stock);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const stock = await stockService.updateStock(Number(req.params.id), req.body);
      res.json(stock);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await stockService.deleteStock(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new StockController();
