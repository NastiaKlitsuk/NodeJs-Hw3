import { Product } from '../models';
import { Request, Response, NextFunction } from 'express';
import { findProductById } from '../utils/products.utils';
import { ResponseStatusCode } from '../models/error';
import { ResponseValidationError } from '../errors/responseValidationError';

export function validateProductExistance(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const productId = request.params.id;
  const maybeProduct = findProductById(productId);
  maybeProduct ? next() : response.sendStatus(404);
}

export function validateProductName(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const product = request.body as Product;
  const productName = product.name;
  return productName.length >= 3
    ? next()
    : next(
        new ResponseValidationError({
          statusCode: ResponseStatusCode.Conflict,
          message: `The product name ${productName} is invalid.`,
        }),
      );
}
