import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

var appRouter = express.Router();

appRouter.route('*').get((req, res) => {
    fs.readFile(path.join(__dirname, '../../client/index.html'), 'utf8', (error, data) => {
        let result = data.replace(/\$\{css\}/g, '').replace(/\$\{js\}/g, 'http://localhost:8080/bundle.js');
        res.status(200).send(result);
    })
});

export { appRouter };