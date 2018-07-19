import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const routeMiddleware = routerMiddleware(history);

function configureStore() {
    const middlewares = [ReduxThunk, logger, routeMiddleware];
    const enhancers = [
        applyMiddleware(...middlewares)
        // other store enhancers if any
    ];
    const store = createStore(connectRouter(history)(rootReducer), ...enhancers);
    return store;
}

const store = configureStore();

export { store, history };
