import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';

import store from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
