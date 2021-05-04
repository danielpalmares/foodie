import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { IoArrowBackOutline, IoMoonSharp } from 'react-icons/io5';
import styles from '../styles/components/Header.module.scss';

export default function Header({ hasBackPageBtn }) {
  const history = useHistory();
  const goBack = () => history.goBack();

  const darkTheme = true;

  return (
    <header className={styles.header}>
      {hasBackPageBtn ? (
        <button className={styles.backPageBtn} onClick={goBack}>
          <IoArrowBackOutline size={26} />
        </button>
      ) : (
        <button className={styles.changeThemeBtn}>
          <IoMoonSharp size={26} color="blue"/>
        </button>
      )}

      <h1>CookingTime</h1>

      <div className={styles.user}>
        <img src="/images/woman-1.png" alt="User Profile" />
      </div>
    </header>
  );
}
