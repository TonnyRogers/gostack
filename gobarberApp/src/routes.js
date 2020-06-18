import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

const Tab = createBottomTabNavigator();

export default (isSigned = false) =>
  isSigned ? (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard2" component={Dashboard} />
      <Tab.Screen name="Home3" component={Dashboard} />
    </Tab.Navigator>
  ) : (
    <Tab.Navigator>
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{ tabBarVisible: false }}
      />
    </Tab.Navigator>
  );
