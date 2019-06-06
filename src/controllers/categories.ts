import express from 'express';
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from '../routes/categories';
import { getProducts } from '../routes/products';
import { validateItemId } from '../middlewares/general.middleware';
import { validateCategoryExistance } from '../middlewares/categories.middleware';

const router = express.Router();

router.use('/:id', [validateItemId, validateCategoryExistance]);
router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.get('/:id/products', getProducts);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export { router };
