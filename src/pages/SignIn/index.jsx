import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';
import LandingHeader from '../../components/LandingHeader';

import { IoArrowForwardOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

export default function SignIn() {
  return (
    <div className={styles.login}>
      <LandingHeader />

      <div className={styles.directions}>
        <h1>
          Hey, <br />
          Sign in now.
        </h1>

        <div>
          <span>Are you new?</span> <br />
          <Link to="/signup">
            Let's create a new account <IoArrowForwardOutline size={14} />
          </Link>
        </div>
      </div>

      <LoginForm />
    </div>
  );
}
