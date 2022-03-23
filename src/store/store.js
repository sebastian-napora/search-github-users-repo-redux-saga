import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import mySaga from './sagas/sagas'
import rootReducer from './reducers/index';

const defaultState = {};

const sagaMiddleware = createSagaMiddleware();

const devTools = process.env.NODE_ENV !== 'production'
  ? composeWithDevTools : null

const store = createStore(
  rootReducer,
  defaultState,
  compose(applyMiddleware(sagaMiddleware), devTools),
)

sagaMiddleware.run(mySaga)

export default store;