import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { IoGridOutline, IoArrowBackOutline } from 'react-icons/io5';
import styles from '../styles/components/Header.module.scss';

export default function Header({ hasBackPageBtn }) {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <header className={styles.header}>
      {hasBackPageBtn ? (
        <button onClick={goBack}>
          <IoArrowBackOutline size={26} />
        </button>
      ) : (
        <Link to="/">
          <button>
            <IoGridOutline size={26} />
          </button>
        </Link>
      )}

      <h1>CookingTime</h1>

      <div className={styles.user}>
        <img src="/images/woman-1.png" alt="User Profile" />
      </div>
    </header>
  );
}
