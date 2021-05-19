import React from 'react';

import logo from '../assets/foodie-logo.svg';
import blob from '../assets/blob-black.svg';

import SignInButton from '../components/SignInButton/index';
import SignUpButton from '../components/SignUpButton/index';

import styles from '../styles/pages/Landing.module.scss';

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.landingContent}>
        <img src={blob} alt="Blob" className={styles.blob} />

        <header>
          <div>
            <img src={logo} alt="Foodie logo" />
          </div>

          <SignInButton />
        </header>

        <main>
          <h2>Search over 1,000,000 recipes.</h2>
          <h3>Make your own recipe, and more...</h3>
          <h4>What are you waiting for?</h4>

          <SignUpButton />
        </main>
      </div>
    </div>
  );
}
