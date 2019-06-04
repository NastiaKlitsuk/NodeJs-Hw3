import * as products from './products.json';
import { Product } from '../models/index.js';

interface Store {
  products: Product[];
  deletedProductsIds: string[];
}

export const store: Store = {
  products,
  deletedProductsIds: [],
};
