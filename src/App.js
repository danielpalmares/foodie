import React from 'react';
import { GlobalContextProvider } from './contexts/GlobalContextProvider';
import Routes from './routes';

import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import './styles/global.scss';

export default function App() {
  const theme = useSelector(state => state.switchThemeReducer.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalContextProvider>
        <Routes />
      </GlobalContextProvider>
    </ThemeProvider>
  );
}
