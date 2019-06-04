import cors from 'cors';
import express from 'express';
import {
  productIdValidator,
  productExistanceValidator,
  productExistanceSetter
} from './middlewares/products.middleware';
import { config } from './controllers';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api/products/:id', [
//   productIdValidator,
//   productExistanceSetter,
//   productExistanceValidator,
// ]);

Object.keys(config).forEach(k => {
  const routeConfig = config[k];
  app.use(routeConfig.prefix, routeConfig.router);
});

export { app };
