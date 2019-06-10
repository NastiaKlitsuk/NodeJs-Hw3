import { Request, Response, NextFunction } from 'express';
import { findCategoryById } from '../utils/categories.utils';

export function validateCategoryExistance(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const categoryId = request.params.id;
  const maybeCategory = findCategoryById(categoryId);

  maybeCategory ? next() : response.sendStatus(404);
}
