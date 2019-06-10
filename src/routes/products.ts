import { store } from '../store';
import { Request, Response, NextFunction } from 'express';
import {
  deleteItem,
  updateItem,
  createItem,
  getItemById
} from './crudHandlers';
import { wrapAsyncAndSend, wrapAsync } from '../utils/async';

const { products, deletedProductsIds } = store;

export const getProducts = wrapAsyncAndSend(
  (request: Request, response: Response, next: NextFunction) =>
    Promise.resolve(products),
);

export function getProductsByCategory(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const categoryId = request.params.id;
  const productsByCategoryId = products.filter(
    product => product.categoryId === categoryId,
  );
  response.status(200).send(productsByCategoryId);
  next();
}

export const getProductById = wrapAsync(
  (request: Request, response: Response, next: NextFunction) =>
    Promise.resolve(getItemById(request, response, next, products)),
);

export function createProduct(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  createItem(request, response, next, products, deletedProductsIds);
}

export function updateProduct(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  updateItem(request, response, next, products);
}

export function deleteProduct(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  deleteItem(request, response, next, products);
  deletedProductsIds.push(request.params.id);
}
