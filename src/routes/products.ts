import { store } from '../store';
import { Request, Response, NextFunction } from 'express';
import {
  deleteItem,
  updateItem,
  createItem,
  getItemById
} from './crudHandlers';

const { products, deletedProductsIds } = store;

export function getProducts(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  response.status(200).send(products);
  next();
}

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

export function getProductById(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  getItemById(request, response, next, products);
}

export function createProduct(request: Request, response: Response) {
  createItem(request, response, products, deletedProductsIds);
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
