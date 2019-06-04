import { store } from '../store';
import { Request, Response, NextFunction } from 'express';
import {
  findProductById,
  findProductIndex
} from '../utils/products.utils';
import { Product } from '../models';
import { send204 } from '../utils/http.utils';
import { send409ForInvalidProductName } from '../validations/products/products.validation';
import { getNewId } from '../utils/general.utils';

export { Product };

const products = store.products;
const deletedProductsIds = store.deletedProductsIds;

export function getProducts(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const categoryId = request.params.categoryId;
  const productsByCategoryId = products.filter(
    product => product.categoryId === categoryId,
  );
  response.send(categoryId ? productsByCategoryId : products);
}

export function getProductById(request: Request, response: Response) {
  const id = request.params.productId;
  const product = findProductById(id);
  response.send(product);
}

export function createProduct(request: Request, response: Response) {
  const product = request.body as Product;

  if (send409ForInvalidProductName(product.name, response)) return;

  product.id = getNewId(products.length, deletedProductsIds) || '';
  products.push(product);
  response.location(`/api/products/${product.id}`);
  response.sendStatus(201);
}

export function updateProduct(request: Request, response: Response) {
  const id = request.params.productId;
  const product = request.body as Product;

  if (send409ForInvalidProductName(product.name, response)) return;

  const maybeProduct = findProductById(id);
  Object.assign(maybeProduct, product);
  response.send(product);
}

export function deleteProduct(request: Request, response: Response) {
  const id = request.params.productId;
  const productToDeleteIndex = findProductIndex(id);

  deletedProductsIds.push(id);
  products.splice(productToDeleteIndex, 1);
  send204(response);
}
