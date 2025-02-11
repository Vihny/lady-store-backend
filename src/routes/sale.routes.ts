import { Router } from 'express';
import SaleController from '../modules/sale/sale.controller';


const router = Router();

router.post('/', SaleController.create);
router.get('/', SaleController.getAll);
router.get('/:id', SaleController.getById);
router.put('/:id', SaleController.update);
router.delete('/:id', SaleController.delete);

export default router;