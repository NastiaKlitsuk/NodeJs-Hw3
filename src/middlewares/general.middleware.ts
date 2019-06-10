import { isNumber } from '../utils/general.utils';
import { ResponseStatusCode } from '../models/error';
import { Request, Response, NextFunction } from 'express';
import { ResponseValidationError } from '../errors/responseValidationError';

export function validateItemId(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const id = request.params.id;
  isNumber(id)
    ? next()
    : next(
        new ResponseValidationError({
          statusCode: ResponseStatusCode.BadRequest,
          message: `The item ${id} is not a number.`,
        }),
      );
}
