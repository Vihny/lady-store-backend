import { Router } from 'express';
import StockController from '../modules/stock/stock.controller';

const router = Router();

// Stock Routes
router.post('/', StockController.create);
router.get('/', StockController.getAll);
router.get('/:id', StockController.getById);
router.put('/:id', StockController.update);
router.delete('/:id', StockController.delete);

export default router;