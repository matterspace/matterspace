import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

// pages
import { App } from './pages/App';

const RouterPage = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </BrowserRouter>);

export default RouterPage;
