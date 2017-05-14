import * as Redux from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export function configureStore(initialState = {}) {
    let middleware = Redux.applyMiddleware(thunk);

    if (process.env.NODE_ENV !== 'production') {
        /*eslint-disable*/
        const devToolsExtension = (window as any).devToolsExtension;
        /*eslint-enable*/
        if (typeof devToolsExtension === 'function') {
            middleware = Redux.compose(middleware, devToolsExtension());
        }
    }

    const store = Redux.createStore(reducers, initialState, middleware);
    
    if ((module as any).hot) {
        (module as any).hot.accept('./reducers.tsx', () => {
            const nexRootReducer = require('./reducers.tsx').default;
            store.replaceReducer(nexRootReducer);
        });
    }

    return store;
};
