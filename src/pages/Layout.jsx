import React from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

export default function Layout({ children, hasBackPageBtn }) {
  const hasBackPage = hasBackPageBtn;
  return (
    <>
      <Header hasBackPageBtn={hasBackPage}/>
      {children}
      <Navigation />
    </>
  );
}
