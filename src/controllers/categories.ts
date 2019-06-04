import express from 'express';
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from '../routes/categories';
import { router as products } from './products';

const router = express.Router();

router.get('/', getCategories);
router.get('/:categoryId', getCategoryById);
router.use('/:categoryId/products', products);
router.post('/', createCategory);
router.put('/:categoryId', updateCategory);
router.delete('/:categoryId', deleteCategory);

export { router };
