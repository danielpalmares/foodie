import React from 'react';
import { GlobalContextProvider } from './contexts/GlobalContextProvider';
import Routes from './routes';

import './styles/global.scss';

export default function App() {
  return (
    <GlobalContextProvider>
      <Routes />
    </GlobalContextProvider>
  );
}
