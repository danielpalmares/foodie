import React, { useContext, useEffect } from 'react';
import NavBottom from '../components/Navigation.jsx';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../contexts/GlobalContextProvider';
import styles from '../styles/pages/Favorites.module.scss';
import Layout from './Layout.jsx';

export default function Favorites() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Favorites');
  });

  return (
    <Layout hasBackPageBtn>
      <div className={styles.favorites}>
        <h1>Favorites</h1>
      </div>
    </Layout>
  );
}
