import React from 'react';

import Header from '../components/AppHeader';
import Navigation from '../components/Navigation/index';

export default function Layout({
  children,
  onlyBackButton,
  switchThemeButton,
}) {
  return (
    <>
      <Header
        onlyBackButton={onlyBackButton}
        switchThemeButton={switchThemeButton}
      />
      {children}
      <Navigation />
    </>
  );
}
