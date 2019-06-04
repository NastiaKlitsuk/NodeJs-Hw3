import { app } from './app';
import { APP_PORT } from './consts/app.consts';

app.listen(APP_PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`app is listening on port ${APP_PORT}`);
});
