import * as colors from 'colors';
import * as express from 'express';
import * as webpack from 'webpack';

// routes
import { apiRouter } from './routes/api';
import { appRouter } from './routes/app';

const app = express();

app.use('/api', apiRouter);
app.use('', appRouter);

app.listen(4000, '0.0.0.0', () => {
    // tslint:disable-next-line:no-console
    console.log(colors.green(`Matterspace is listening on http://localhost:4000. NODE_ENV: ${process.env.NODE_ENV}`));
});
