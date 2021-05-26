import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SignUpForm from '../../components/SignUpForm';

import { IoArrowBackOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

import { useDispatch } from 'react-redux';
import { createUserAction } from '../../store/createUser';

export default function SignUp() {
  const dispatch = useDispatch();

  const createNewUser = user => {
    dispatch(createUserAction(user));
  };

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

        {/* {status === 'error' && (
          <span className={styles.emailError}>
            An account with this email already exists.
          </span>
        )} */}
      </div>

      <SignUpForm handleGetData={createNewUser} />
    </div>
  );
}
