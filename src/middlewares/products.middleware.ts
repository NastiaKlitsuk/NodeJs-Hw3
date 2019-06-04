import { send404, send400 } from '../utils/http/http.utils';
import { Request, Response, NextFunction } from 'express';
import { isProductIdNumber } from '../validations/products/products.validation';
import { setIsRequestedProductExists } from '../utils/products/products.utils';

export function productIdValidator(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const id = request.params.id;
  isProductIdNumber(id) ? next() : send400(response);
}

export function productExistanceSetter(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  setIsRequestedProductExists(request, response);
  next();
}

export function productExistanceValidator(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const isProductExists = response.locals.isProductExists;
  isProductExists ? next() : send404(response);
}
