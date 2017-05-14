import * as Redux from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

declare var module: { hot: any };
declare var window: { devToolsExtension: any };

export function configureStore(initialState = {}) {
    let middleware = Redux.applyMiddleware(thunk);

    if (process.env.NODE_ENV !== 'production') {
        /*eslint-disable*/
        const devToolsExtension = window.devToolsExtension;
        /*eslint-enable*/
        if (typeof devToolsExtension === 'function') {
            middleware = Redux.compose(middleware, devToolsExtension());
        }
    }

    const store = Redux.createStore(reducers, initialState, middleware);
    
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            /*eslint-disable*/
            store.replaceReducer(require('./reducers').default);
            /*eslint-enable*/
        });
    }

    return store;
};
