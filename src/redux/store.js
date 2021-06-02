import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const defaultState = {};
  const middlewares = [sagaMiddleware];

  const store = createStore(rootReducer, defaultState, composeWithDevTools(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  return store;
};

