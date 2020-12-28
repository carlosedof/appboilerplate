import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
const enhancers = [applyMiddleware(...middleware)];
const initialState = {};
const store = createStore(reducers, initialState, compose(...enhancers));

const configureStore = () => {
  return { store };
};

sagaMiddleware.run(sagas);

export default configureStore;
