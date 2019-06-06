import { send400 } from '../utils/http.utils';
import { Request, Response, NextFunction } from 'express';
import { isNumber } from '../utils/general.utils';

export function validateItemId(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const id = request.params.id;
  isNumber(id) ? next() : send400(response);
}
