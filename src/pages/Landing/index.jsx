import React from 'react';

import SignUpButton from '../../components/SignUpButton/index';
import LandingHeader from '../../components/LandingHeader/index';

import blob from '../../assets/blob-black.svg';

import styles from './styles.module.scss';

export default function Landing() {
  return (
    <div className={styles.landing}>
      <img src={blob} alt="Blob" className={styles.blob} />

      <div className={styles.landingContent}>
        <LandingHeader hasSignInButton />

        <main>
          <h1>Search over 1,000,000 recipes.</h1>
          <h2>Make your own recipe, and more...</h2>
          <h3>What are you waiting for?</h3>
          <SignUpButton />
        </main>
      </div>
    </div>
  );
}
