import products from './products.json';
import categories from './categories.json';
import { Product, Category } from '../models/index.js';

interface Store {
  products: Product[];
  categories: Category[];
  deletedProductsIds: string[];
  deletedCategoriesIds: string[];
}

export const store: Store = {
  products,
  categories,
  deletedProductsIds: [],
  deletedCategoriesIds: [],
};
