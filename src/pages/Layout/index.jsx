import React from 'react';

import Wrapper from '../../components/Wrapper';
import Header from '../../components/AppHeader';
import Navigation from '../../components/Navigation';
import Sidebar from '../../components/Sidebar';

export default function Layout({
  children,
  onlyBackButton,
  profileHeader,
  defaultHeader,
}) {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <Header
          onlyBackButton={onlyBackButton}
          profileHeader={profileHeader}
          defaultHeader={defaultHeader}
        />
        {children}
        <Navigation />
      </Wrapper>
    </>
  );
}
