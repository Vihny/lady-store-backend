import { Router } from 'express';
import SupplierController from '../modules/supplier/supplier.controller';

const router = Router();

router.post('/', SupplierController.create);
router.get('/', SupplierController.getAll);
router.get('/:id', SupplierController.getById);
router.put('/:id', SupplierController.update);
router.delete('/:id', SupplierController.delete);

export default router;
