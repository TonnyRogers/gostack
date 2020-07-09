import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import { store, persistor } from './store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StatusBar backgroundColor="#353940" barStyle="light-content" />
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
