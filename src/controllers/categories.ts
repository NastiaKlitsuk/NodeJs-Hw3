import express from 'express';
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from '../routes/categories';
import { getProductsByCategory } from '../routes/products';
import { validateItemId } from '../middlewares/general.middleware';
import { validateCategoryExistance } from '../middlewares/categories.middleware';

const router = express.Router();

router.post('/', createCategory);
router.get('/', getCategories);
router.use('/:id', [validateItemId, validateCategoryExistance]);
router.get('/:id', getCategoryById);
router.get('/:id/products', getProductsByCategory);
router.delete('/:id', deleteCategory);
router.put('/:id', updateCategory);

export { router };
