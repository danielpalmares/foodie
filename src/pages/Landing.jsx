import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/foodie-logo.svg';
import blob from '../assets/blob-black.svg';

import { IoEnterOutline, IoArrowForwardOutline } from 'react-icons/io5';
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

          <Link to="/login">
            <button>
              Login <IoEnterOutline size={22} />
            </button>
          </Link>
        </header>

        <main>
          <h2>Search over 1,000,000 recipes.</h2>
          <h3>Make your own recipe, and more...</h3>
          <h4>What are you waiting for?</h4>

          <Link to="/signup">
            <button>
              Sign Up Now <IoArrowForwardOutline size={26} />
            </button>
          </Link>
        </main>
      </div>
    </div>
  );
}
