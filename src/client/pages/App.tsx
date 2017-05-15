import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Route, Switch } from 'react-router';
import IndexPage from './IndexPage';

const App = () => (
    <div className="container">
        <Switch>
            <Route exact={true} path="/" component={IndexPage} />
        </Switch>
    </div>
);

export default App;
