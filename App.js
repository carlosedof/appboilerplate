import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from './src/store';
import { Colors, NavigationService } from './src/config';
import NavigationRoutes from './src/config/navigation';
import { Loader } from "./src/common";
import { Snackbar } from "./src/components";

const { store } = configureStore();

const App = () => {
  console.disableYellowBox = true; // TODO REMOVER
  return (
    <Provider store={store}>
      <PaperProvider theme={Colors.paperMainTheme}>
        <SafeAreaProvider>
          <NavigationContainer ref={NavigationService.navigationRef}>
            <NavigationRoutes />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
      <Loader />
      <Snackbar />
    </Provider>
  );
};

export default App;
