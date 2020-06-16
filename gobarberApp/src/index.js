import React from 'react';
import { StatusBar } from 'react-native';

// import { Container } from './styles';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
      <Routes />
    </>
  );
}
