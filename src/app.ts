import express from 'express';
import createError from 'http-errors';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.disable('x-powered-by');

import * as helloController from './controller/hello';

app.get('/hello', helloController.index);

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
    next(createError(404));
});

// error handler
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send('error');
});

app.listen(port, () => {
    console.log(`listening on localhost:${port}`);
});