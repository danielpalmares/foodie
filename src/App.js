import React from 'react';
import Routes from './routes';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';

export default function App() {
  const { theme } = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}
