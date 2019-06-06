import { store } from '../store';
import { Response, Request } from 'express';
import { Category } from '../models';
import { getNewId } from '../utils/general.utils';
import { send204 } from '../utils/http.utils';
import { findCategoryById, findCategoryIndex } from '../utils/categories.utils';

const categories = store.categories;
const deletedCategoriesIds = store.deletedCategoriesIds;

export function getCategories(request: Request, response: Response) {
  response.send(categories);
}

export function getCategoryById(request: Request, response: Response) {
  const categoryId = request.params.id;
  const category = findCategoryById(categoryId);
  response.send(category);
}

export function createCategory(request: Request, response: Response) {
  const category = request.body as Category;

  category.id = getNewId(categories.length, deletedCategoriesIds) || '';
  categories.push(category);
  response.location(`/api/categories/${category.id}`);
  response.sendStatus(201);
}

export function updateCategory(request: Request, response: Response) {
  const id = request.params.id;
  const category = request.body as Category;
  const maybeCategory = findCategoryById(id);

  Object.assign(maybeCategory, category);
  response.send(category);
}

export function deleteCategory(request: Request, response: Response) {
  const id = request.params.id;
  const productToDeleteIndex = findCategoryIndex(id);

  deletedCategoriesIds.push(id);
  categories.splice(productToDeleteIndex, 1);
  send204(response);
}
