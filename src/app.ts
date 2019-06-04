import * as cors from 'cors';
import * as express from 'express';
import { initControllers } from './controllers';
import { productIdValidator, productExistanceValidator, productExistanceSetter } from './middlewares/products.middleware';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products/:id', [
    productIdValidator,
    productExistanceSetter,
    productExistanceValidator,
]);

initControllers(app);

export { app };
