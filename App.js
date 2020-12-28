import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import styled, { css } from 'styled-components/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from './src/store';
import { PageTemplate } from './src/templates';
import { Metrics, Colors, NavigationService } from './src/config';
import NavigationRoutes from './src/config/navigation';

const { store } = configureStore();

const App = () => {
  console.disableYellowBox = true; // TODO REMOVER
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer ref={NavigationService.navigationRef}>
          <NavigationRoutes />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
