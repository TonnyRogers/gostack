import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import { store, persistor } from './store';
import App from './App';

const Index = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StatusBar backgroundColor="#353940" barStyle="light-content" />
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default Index;
