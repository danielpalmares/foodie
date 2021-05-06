import React from 'react';
import { Link } from 'react-router-dom';

import SignUpForm from '../components/SignUpForm';

import { IoArrowBackOutline } from 'react-icons/io5';
import styles from '../styles/pages/SignUp.module.scss';

export default function SignUp() {
  return (
    <div className={styles.signUp}>
      <div className={styles.logo}>
        <h1>CT</h1>
      </div>

      <div className={styles.directions}>
        <h1>
          Hey, <br />
          Sign Up Now.
        </h1>

        <span>
          Already have an account? <br />
          <Link to="/login">
            <IoArrowBackOutline size={14} />
            Go to login page.
          </Link>
        </span>
      </div>

      <SignUpForm />
    </div>
  );
}
