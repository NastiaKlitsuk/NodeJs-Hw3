import { send404 } from '../utils/http.utils';
import { Request, Response, NextFunction } from 'express';
import { findCategoryById } from '../utils/categories.utils';

export function validateCategoryExistance(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const maybeCategory = findCategoryById(request.params.id);
  maybeCategory ? next() : send404(response);
}
