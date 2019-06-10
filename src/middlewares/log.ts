import { store } from '../store';
import { Request, Response, NextFunction } from 'express';

export function log(request: Request, response: Response, next: NextFunction) {
  // tslint:disable-next-line: no-console
  console.log(store);
  next();
}
