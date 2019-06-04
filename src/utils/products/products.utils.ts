import { Product } from '../../models';
import { store } from '../../store';
import { Request, Response } from 'express';

const products = store.products;

export function setIsRequestedProductExists(request: Request, resposne: Response) {
  const id = request.params.id;

  if (id) {
    const maybeProduct = findProductById(id);
    resposne.locals.isProductExists = !!maybeProduct;
  }
}

export function findProductById(id: string) {
  return products.find(product => product.id === id);
}

export function getNewProductId(
  productsCount: number,
  // tslint:disable-next-line: trailing-comma
  deletedProductIds: string[]
) {
  return deletedProductIds.length
    ? deletedProductIds.shift()
    : (productsCount + 1).toString();
}

export function findProductIndex(id: string) {
  return products.findIndex(product => product.id === id);
}
