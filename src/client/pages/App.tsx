import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import IndexPage from './IndexPage';


const App = () => (
    <div className="container">
        <Switch>
            <Route exact path="/" component={IndexPage} />
        </Switch>
    </div>
)

export default App;