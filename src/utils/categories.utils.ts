import { store } from '../store';
import { isItemExists, findItemIndex } from './general.utils';

const categories = store.categories;

export function findCategoryById(id: string) {
  return isItemExists(id, categories);
}

export function findCategoryIndex(id: string) {
  return findItemIndex(id, categories);
}
