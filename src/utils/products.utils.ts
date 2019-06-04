import { store } from '../store';
import { Request, Response } from 'express';

const products = store.products;

export function setIsRequestedProductExists(request: Request, resposne: Response) {
  const id = request.params.productId;

  if (id) {
    const maybeProduct = findProductById(id);
    resposne.locals.isProductExists = !!maybeProduct;
  }
}

export function findProductById(id: string) {
  return products.find(product => product.id === id);
}

export function findProductIndex(id: string) {
  return products.findIndex(product => product.id === id);
}
