import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Main from './pages/Main';
import AnimationTypes from './pages/AnimationTypes';
import Parallel from './pages/Parallel';
import Sequential from './pages/Sequential';
import Stagger from './pages/Stagger';
import Loop from './pages/Loop';
import Interpolate from './pages/Interpolate';
import PanResponder from './pages/PanResponder';
import Example1 from './pages/Example1';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}
        initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AnimationTypes" component={AnimationTypes} />
        <Stack.Screen name="Parallel" component={Parallel} />
        <Stack.Screen name="Sequential" component={Sequential} />
        <Stack.Screen name="Stagger" component={Stagger} />
        <Stack.Screen name="Loop" component={Loop} />
        <Stack.Screen name="Interpolate" component={Interpolate} />
        <Stack.Screen name="PanResponder" component={PanResponder} />
        <Stack.Screen name="Example1" component={Example1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
