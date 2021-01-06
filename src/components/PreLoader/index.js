import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { persistStore } from 'redux-persist';
import configureStore from '../../store';

const { store } = configureStore();

const PreLoader = ({ children }) => {
  return (
    <Provider store={store}>
      <CheckRehydrated>{children}</CheckRehydrated>
    </Provider>
  );
};

const CheckRehydrated = ({ children }) => {
  const [rehydrated, setRehydrated] = useState(false);
  persistStore(store, {}, () => {
    setRehydrated(true);
  });
  if (!rehydrated) {
    return <View />;
  }
  return <>{children}</>;
};

export default PreLoader;
