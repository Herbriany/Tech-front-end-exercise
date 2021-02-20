import { createStore, applyMiddleware, compose } from 'redux'
import reduxImmutableStateInvarient from 'redux-immutable-state-invarient'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleWare(thunk, reduxImmutableStateInvarient())))
}

