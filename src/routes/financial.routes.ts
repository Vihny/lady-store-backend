import { Router } from 'express';
import FinancialController from '../modules/financial/financial.controller';

const router = Router();

router.post('/', FinancialController.create);
router.get('/', FinancialController.getAll);
router.get('/:id', FinancialController.getById);
router.put('/:id', FinancialController.update);
router.delete('/:id', FinancialController.delete);

export default router;
