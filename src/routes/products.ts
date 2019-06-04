import { store } from '../store';
import { Request, Response, NextFunction } from 'express';
import {
  findProductById,
  getNewProductId,
  findProductIndex
} from '../utils/products/products.utils';
import { Product } from '../models';
import { send204 } from '../utils/http/http.utils';
import { send409ForInvalidProductName } from '../validations/products/products.validation';

const products = store.products;
const deletedProductsIds = store.deletedProductsIds;

export function getProducts(
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.send(products);
}

export function getProductById(request: Request, response: Response) {
  const id = request.params.id;
  const product = findProductById(id);
  response.send(product);
}

export function createProduct(request: Request, response: Response) {
  const product = request.body as Product;

  if (send409ForInvalidProductName(product.name, response)) return;

  product.id = getNewProductId(products.length, deletedProductsIds) || '';
  products.push(product);
  response.location(`/api/products/${product.id}`);
  response.sendStatus(201);
}

export function updateProduct(request: Request, response: Response) {
  const id = request.params.id;
  const product = request.body as Product;

  if (send409ForInvalidProductName(product.name, response)) return;

  const maybeProduct = findProductById(id);
  Object.assign(maybeProduct, product);
  response.send(product);
}

export function deleteProduct(request: Request, response: Response) {
  const id = request.params.id;
  const productToDeleteIndex = findProductIndex(id);

  products.splice(productToDeleteIndex, 1);
  send204(response);
}
