import { store } from '../store';
import { Response, Request, NextFunction } from 'express';
import {
  deleteItem,
  updateItem,
  createItem,
  getItemById
} from './crudHandlers';

const categories = store.categories;
const deletedCategoriesIds = store.deletedCategoriesIds;

export function getCategories(request: Request, response: Response) {
  response.send(categories);
}

export function getCategoryById(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  getItemById(request, response, next, categories);
}

export function createCategory(request: Request, response: Response) {
  createItem(request, response, categories, deletedCategoriesIds);
}

export function updateCategory(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  updateItem(request, response, next, categories);
}

export function deleteCategory(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  deleteItem(request, response, next, categories);
  deletedCategoriesIds.push(request.params.id);
}
