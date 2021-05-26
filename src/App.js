import React from 'react';
import { GlobalContextProvider } from './contexts/GlobalContextProvider';
import Routes from './routes';

import './styles/global.scss';

import { Provider } from 'react-redux';
import { storeConfig } from './store/storeConfig';

export default function App() {
  return (
    <Provider store={storeConfig}>
      <GlobalContextProvider>
        <Routes />
      </GlobalContextProvider>
    </Provider>
  );
}
