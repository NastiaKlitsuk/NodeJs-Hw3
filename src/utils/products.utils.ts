import { store } from '../store';
import { isItemExists, findItemIndex } from './general.utils';

const products = store.products;

export function findProductById(id: string) {
  return isItemExists(id, products);
}

export function findProductIndex(id: string) {
  return findItemIndex(id, products);
}
