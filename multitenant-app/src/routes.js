import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import SignIn from './pages/SignIn';

const Stack = createStackNavigator();

export default (isSigned = false) => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerShown: false,
    }}
    initialRouteName="SignIn"
  >
    {isSigned ? (
      <Stack.Screen name="Main" component={Main} />
    ) : (
      <Stack.Screen name="SignIn" component={SignIn} />
    )}
  </Stack.Navigator>
);
