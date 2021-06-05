import React from 'react';

import Header from '../components/AppHeader';
import Navigation from '../components/Navigation/index';

export default function Layout({
  children,
  onlyBackButton,
  profileHeader,
  defaultHeader,
}) {
  return (
    <>
      <Header
        onlyBackButton={onlyBackButton}
        profileHeader={profileHeader}
        defaultHeader={defaultHeader}
      />
      {children}
      <Navigation />
    </>
  );
}
