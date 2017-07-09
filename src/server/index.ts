import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import cookieSession = require('cookie-session');
import * as colors from 'colors';
import * as passport from 'passport';
import apiRoute from './routes/api';
import appRoute from './routes/app';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
}));
app.use(passport.initialize());
app.use(passport.session());

// delay
app.use((req, res, next) => { setTimeout(next, 0); });

// routes
app.use('/api', apiRoute);
app.use('', appRoute);

app.listen(4000, '0.0.0.0', () => {
    /* tslint:disable */
    console.log(colors.green(`MatterSpace started at http://localhost:4000/. NODE_ENV: ${process.env.NODE_ENV}`));
    /* tslint-enable */
});

export default app; // for testing
