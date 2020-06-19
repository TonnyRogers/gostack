/* eslint-disable react/no-children-prop */
import React from 'react';
import { Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Confirm from './pages/New/Confirm';
import SelectDatetime from './pages/New/SelectDatetime';
import SelectProvider from './pages/New/SelectProvider';

const Tab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default (isSigned = false) =>
  isSigned ? (
    <MaterialTab.Navigator
      initialRouteName="Dashboard"
      activeColor="#fff"
      inactiveColor="rgba(255,255,255,0.6)"
      keyboardHidesNavigationBar
      barStyle={{
        backgroundColor: '#8d41a8',
      }}
    >
      <MaterialTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Agendamentos',
          tabBarIcon: ({ color }) => (
            <Icon name="event" size={20} color={color} />
          ),
        }}
      />
      <MaterialTab.Screen
        name="New"
        children={() => (
          <Stack.Navigator
            initialRouteName="SelectProvider"
            screenOptions={{
              headerTintColor: '#FFF',
              headerTransparent: true,
              headerLeftContainerStyle: {
                marginLeft: 5,
              },
              headerTitleAlign: 'center',
              headerStyle: {},
            }}
          >
            <Stack.Screen
              component={SelectDatetime}
              name="SelectDatetime"
              options={{ title: 'Selecione o horário' }}
            />
            <Stack.Screen
              component={SelectProvider}
              name="SelectProvider"
              options={{ title: 'Selecione o Prestador' }}
            />
            <Stack.Screen component={Confirm} name="Confirm" />
          </Stack.Navigator>
        )}
        options={{
          title: 'Agendar',
          tabBarIcon: ({ color }) => (
            <Icon name="add-circle-outline" size={20} color={color} />
          ),
        }}
      />
      <MaterialTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={20} color={color} />
          ),
        }}
      />
    </MaterialTab.Navigator>
  ) : (
    <Tab.Navigator initialRouteName="SignIn">
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
