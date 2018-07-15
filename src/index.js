import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import App from './container/App';
import Reducers from './reducers';

// Adding Redux dev tools to chrome browser.
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(),
);

const store = createStore(Reducers,enhancer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#placeholder'));