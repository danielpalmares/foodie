import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../contexts/GlobalContextProvider';
import styles from '../styles/pages/Favorites.module.scss';
import Layout from './Layout.jsx';

export default function Favorites() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Favorites');
  });

  return (
    <Layout onlyBackButton>
      <div className={styles.favorites}>
        <h1>Favorites</h1>
      </div>
    </Layout>
  );
}
