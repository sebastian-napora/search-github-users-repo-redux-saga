import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import mySaga from './sagas/sagas'
import rootReducer from './reducers/index';

const defaultState = {};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV !== 'production'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(mySaga)

export default store;