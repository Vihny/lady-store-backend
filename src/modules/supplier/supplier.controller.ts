import { Request, Response } from 'express';
import supplierService from './supplier.service';

class SupplierController {
  async create(req: Request, res: Response) {
    try {
      const supplier = await supplierService.createSupplier(req.body);
      res.status(201).json(supplier);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const suppliers = await supplierService.findAllSuppliers(req.query);
      res.json(suppliers);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const supplier = await supplierService.findSupplierById(Number(req.params.id));
      res.json(supplier);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const supplier = await supplierService.updateSupplier(Number(req.params.id), req.body);
      res.json(supplier);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await supplierService.deleteSupplier(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new SupplierController();
