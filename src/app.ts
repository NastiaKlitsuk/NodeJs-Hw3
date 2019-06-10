import cors from 'cors';
import express from 'express';
import { config } from './controllers';
import { log } from './middlewares/log';
import { logError } from './middlewares/logError';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Object.keys(config).forEach(routeName => {
  const routeConfig = config[routeName];
  app.use(routeConfig.prefix, routeConfig.router);
});

app.use(log);
app.use(logError);

export { app };
