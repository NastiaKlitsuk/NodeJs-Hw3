import { Request, Response, NextFunction } from 'express';
import { findCategoryById } from '../utils/categories.utils';
import { ResponseStatusCode } from '../models/error';
import { ResponseValidationError } from '../errors/responseValidationError';

export function validateCategoryExistance(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const categoryId = request.params.id;
  const maybeCategory = findCategoryById(categoryId);

  maybeCategory
    ? next()
    : next(
        new ResponseValidationError({
          statusCode: ResponseStatusCode.NotFound,
          message: `The category ${categoryId} does not exist.`,
        }),
      );
}
