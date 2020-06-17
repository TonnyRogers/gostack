import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createSwitchNavigator({
          Dashboard,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
