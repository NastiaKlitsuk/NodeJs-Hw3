import { Request, Response, NextFunction } from 'express';
import { ResponseValidationError } from '../errors/responseValidationError';

export function logError(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // tslint:disable-next-line: no-console
  console.log('CUSTOM ERROR HANDLER', error.stack);
  if (error instanceof ResponseValidationError) {
    res.status(parseInt(error.statusCode, 10)).send(error.message);
    return;
  }
  next(error);
}
