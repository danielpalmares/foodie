import React from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation/index';

export default function Layout({ children, hasBackPageBtn, onlyBackBtn }) {
  const hasBackPage = hasBackPageBtn;
  const onlyBackPageBtn = onlyBackBtn;
  return (
    <>
      <Header hasBackPageBtn={hasBackPage} onlyBackBtn={onlyBackPageBtn} />
      {children}
      <Navigation />
    </>
  );
}
