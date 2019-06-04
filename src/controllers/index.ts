import { Application } from 'express';
import * as express from 'express';
import productsController from './products';

export function initControllers(app: express.Application) {
  productsController(app);
}

export { productsController };
