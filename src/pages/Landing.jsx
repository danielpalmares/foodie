import React from 'react';
import { Link } from 'react-router-dom';

import { IoEnterOutline, IoArrowForwardOutline } from 'react-icons/io5';
import styles from '../styles/pages/Landing.module.scss';

export default function Landing() {
  const gradient = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))';

  return (
    <div
      className={styles.landing}
      style={{
        backgroundImage: `${gradient}, url(${
          process.env.PUBLIC_URL + '/images/ct-background.jpg'
        })`,
      }}
    >
      <div className={styles.landingContent}>
        <header>
          <div>
            <h1>CT</h1>
            <span>CookingTime</span>
          </div>

          <Link to="/login">
            <button>
              Login <IoEnterOutline size={22} />
            </button>
          </Link>
        </header>

        <main>
          <h2>Search over 1,000,000 recipes.</h2>
          <h3>Make your own recipe.</h3>
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
