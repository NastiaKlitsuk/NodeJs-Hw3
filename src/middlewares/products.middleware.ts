import { send404, send409 } from '../utils/http.utils';
import { Request, Response, NextFunction } from 'express';
import { findProductById } from '../utils/products.utils';
import { Product } from '../models';

export function validateProductExistance(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const maybeProduct = findProductById(request.params.id);
  maybeProduct ? next() : send404(response);
}

export function validateProductName(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const product = request.body as Product;
  return product.name.length < 3 ? send409(response) : next();
}
