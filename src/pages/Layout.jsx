import React from 'react';

import Header from '../components/AppHeader';
import Navigation from '../components/Navigation/index';

export default function Layout({
  children,
  onlyBackButton,
  switchThemeButton,
  defaultHeader,
}) {
  return (
    <>
      <Header
        onlyBackButton={onlyBackButton}
        switchThemeButton={switchThemeButton}
        defaultHeader={defaultHeader}
      />
      {children}
      <Navigation />
    </>
  );
}
