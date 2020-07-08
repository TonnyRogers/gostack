import React from 'react';
import { StatusBar } from 'react-native';

// import { Container } from './styles';
import Routes from './routes';

const App = () => (
  <>
    <StatusBar backgroundColor="#353940" barStyle="light-content" />
    <Routes />
  </>
);

export default App;
