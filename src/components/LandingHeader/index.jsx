import React from 'react';

import SignInButton from '../SignInButton/index';

import logo from '../../assets/foodie-logo.svg';

import styles from './styles.module.scss';

export default function LandingHeader({ hasSignInButton }) {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Foodie logo" />

      {hasSignInButton && <SignInButton />}
    </header>
  );
}
