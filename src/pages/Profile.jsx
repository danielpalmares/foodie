import React, { useContext, useEffect } from 'react';
import NavBottom from '../components/Navigation.jsx';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../contexts/GlobalContextProvider';
import styles from '../styles/pages/Profile.module.scss';
import Layout from './Layout.jsx';

export default function Profile() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Profile');
  });

  return (
    <Layout hasBackPageBtn>
      <div className={styles.profile}>
        <h1>Profile</h1>
      </div>
    </Layout>
  );
}
