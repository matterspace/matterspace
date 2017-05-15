import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import App from './pages/App';

const RouterPage = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={App} />
        </Switch>
    </BrowserRouter>
);

export default RouterPage;
