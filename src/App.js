import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { reSignInAction } from './store/user';
import Routes from './routes';

export default function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.theme);

  // redirect user if the account is set to remember
  useEffect(() => {
    dispatch(reSignInAction());
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}
