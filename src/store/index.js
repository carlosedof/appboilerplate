import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

import reducers from './reducers';
import sagas from './sagas';

const persistConfig = {
  key: 'boilerplate',
  storage: AsyncStorage,
  whitelist: ['auth', 'user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const configureStore = () => {
  return { store };
};

sagaMiddleware.run(sagas);

export default configureStore;
