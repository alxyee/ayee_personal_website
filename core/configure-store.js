import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

export function configureStore(initialState, reducer) {
    const store = applyMiddleware(thunk)(createStore)(reducer, initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept(reducer, () => {
            store.replaceReducer(reducer.default);
            return true;
        });
    }
    return store;
}