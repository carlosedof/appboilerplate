import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeNavigation from '../HomeNavigation';
import Modal from '../../common/Modal';
import Login from '../../features/Login';
import { Registration } from '../../features/Registration';
import SplashScreen from '../../features/SplashScreen';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName="SplashScreen" headerMode="none">
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Home" component={HomeNavigation} />
      <MainStack.Screen name="Registration" component={Registration} />
      <MainStack.Screen name="SplashScreen" component={SplashScreen} />
    </MainStack.Navigator>
  );
};

export default function NavigationRoutes() {
  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Modal"
        component={Modal}
        options={{
          cardStyle: { backgroundColor: 'transparent' },
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
    </RootStack.Navigator>
  );
}
