import { Application } from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../routes/products';

export default function setup(app: Application) {
  app.get('/api/products', getProducts);
  app.get('/api/products/:id', getProductById);
  app.post('/api/products', createProduct);
  app.put('/api/products/:id', updateProduct);
  app.delete('/api/products/:id', deleteProduct);
}
