import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default (initialState: any = { form: undefined }) => {
    let middleware: any = applyMiddleware(thunk);

    if (process.env.NODE_ENV !== 'production') {
        /*eslint-disable*/
        const devToolsExtension = (window as any).devToolsExtension;
        /*eslint-enable*/
        if (typeof devToolsExtension === 'function') {
            middleware = compose(middleware, devToolsExtension());
        }
    }

    const store = createStore(reducers, initialState, middleware);

    if ((module as any).hot) {
        (module as any).hot.accept('./reducers', () => {
            store.replaceReducer(require('./reducers').default);
        });
    }

    return store;
};
