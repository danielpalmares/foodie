import React from 'react';

import BackPage from '../components/BackPage';
import Navigation from '../components/Navigation';

export default function Layout({ children, backPage }) {
  return (
    <>
      {backPage && <BackPage />}
      {children}
      <Navigation />
    </>
  );
}
