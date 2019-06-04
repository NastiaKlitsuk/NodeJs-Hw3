import { store } from '../store';

const categories = store.categories;

export function findCategoryById(id: string) {
  return categories.find(category => category.id === id);
}

export function findCategoryIndex(id: string) {
  return categories.findIndex(category => category.id === id);
}
