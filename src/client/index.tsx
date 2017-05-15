import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import Router from './router';
// tslint:disable-next-line:no-var-requires
require('./styles/styles.scss');
// tslint:disable-next-line:no-var-requires
require('../../node_modules/font-awesome/css/font-awesome.css');

declare var module: { hot: any };

const store = configureStore();

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById("app"),
);
