import express from 'express';
import httpErrors from 'http-errors';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.disable('x-powered-by');

import * as helloController from './controller/hello';
import * as timestampController from './controller/timestamp';

app.get('/hello', helloController.index);
app.get('/timestamp', timestampController.index);

// catch 404 and forward to error handler
app.use((next: express.NextFunction) => {
  next(httpErrors(404));
});

// error handler
app.use((err: any, req: express.Request, res: express.Response) => {
    // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('error');
});

app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});
