import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../contexts/GlobalContextProvider';

import Layout from './Layout.jsx';

export default function Favorites() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Favorites');
  });

  return (
    <Layout onlyBackButton>
      <div>
        <h1>Favorites</h1>
      </div>
    </Layout>
  );
}
