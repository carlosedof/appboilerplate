import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Home from '../../features/Home';
import Icon from '../../common/Icon';
import { Colors, Metrics } from '..';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    source: 'MaterialCommunityIcons',
    name: 'view-dashboard-outline',
    private: false,
  },
  Places: {
    source: 'FontAwesome',
    name: 'user',
    private: true,
  },
  MyHealth: {
    source: 'FontAwesome',
    name: 'user',
    private: true,
  },
  Notifications: {
    source: 'Ionicons',
    name: 'ios-notifications-outline',
    private: true,
  },
  User: {
    source: 'AntDesign',
    name: 'user',
    private: true,
  },
};

export default ({ navigation: mainNavigation }) => {
  console.log('rodei homenavi');
  const screenOptionsRender = (route) => ({
    tabBarIcon: ({ focused }) => {
      const { source, name } = icons[route.name];
      return (
        <Icon
          source={source}
          iconName={name}
          size={30}
          color={focused ? Colors.mainTheme.primary : Colors.mainTheme.primary}
        />
      );
    },
    tabBarButton: (props) => {
      return <TouchableOpacity {...props} />;
    },
  });

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) =>
        screenOptionsRender(route, navigation)
      }
      tabBarOptions={{
        style: styles.tabBarOptions,
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Places"
        component={Home}
        options={{
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="MyHealth"
        component={Home}
        options={{
          tabBarVisible: false,
        }}
      />
      <Tab.Screen name="Notifications" component={Home} />
      <Tab.Screen name="User" component={Home} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarOptions: { height: 70, paddingBottom: Metrics.spacing.lg },
});
