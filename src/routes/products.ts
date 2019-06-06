import { store } from '../store';
import { Product } from '../models';
import { Request, Response } from 'express';
import { send204 } from '../utils/http.utils';
import { getNewId } from '../utils/general.utils';
import { findProductById, findProductIndex } from '../utils/products.utils';

const { products, deletedProductsIds } = store;

export function getProducts(request: Request, response: Response) {
  response.send(products);
}

export function getProductsByCategory(request: Request, response: Response) {
  const categoryId = request.params.id;
  const productsByCategoryId = products.filter(
    product => product.categoryId === categoryId,
  );
  response.send(productsByCategoryId);
}

export function getProductById(request: Request, response: Response) {
  const id = request.params.id;
  const product = findProductById(id);
  response.send(product);
}

export function createProduct(request: Request, response: Response) {
  const product = request.body as Product;

  product.id = getNewId(products.length, deletedProductsIds) || '';
  products.push(product);
  response.location(`/api/products/${product.id}`);
  response.sendStatus(201);
}

export function updateProduct(request: Request, response: Response) {
  const id = request.params.id;
  const product = request.body as Product;
  const maybeProduct = findProductById(id);

  Object.assign(maybeProduct, product);
  response.send(product);
}

export function deleteProduct(request: Request, response: Response) {
  const id = request.params.id;
  const productToDeleteIndex = findProductIndex(id);

  deletedProductsIds.push(id);
  products.splice(productToDeleteIndex, 1);
  send204(response);
}
