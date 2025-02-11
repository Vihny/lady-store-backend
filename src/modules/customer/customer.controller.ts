import { Request, Response } from 'express';
import customerService from './customer.service';

class CustomerController {
  async create(req: Request, res: Response) {
    try {
      const customer = await customerService.createCustomer(req.body);
      res.status(201).json(customer);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const customers = await customerService.findAllCustomers(req.query);
      res.json(customers);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const customer = await customerService.findCustomerById(Number(req.params.id));
      res.json(customer);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const customer = await customerService.updateCustomer(Number(req.params.id), req.body);
      res.json(customer);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await customerService.deleteCustomer(Number(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new CustomerController();
