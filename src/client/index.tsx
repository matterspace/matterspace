import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configureStore } from './redux/store';
import { Provider } from 'react-redux';
require('./styles/styles.scss');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../../node_modules/font-awesome/css/font-awesome.css');

declare var module: { hot: any };

const store = configureStore();

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Provider store={store}>
        <div>
            Home 2
	    </div>
    </Provider>,
    document.getElementById("app")
);