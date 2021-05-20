import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SignUpForm from '../../components/SignUpForm';

import { IoArrowBackOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

import { connect } from 'react-redux';
import { createUser } from '../../store/actions/createUser';

function SignUp({ createNewUser, signedUp }) {
  const { status } = signedUp.user;

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

        {status === 'error' && (
          <span className={styles.emailError}>
            An account with this email already exists.
          </span>
        )}
      </div>

      <SignUpForm handleGetData={createNewUser} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    signedUp: state.signedUp,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createNewUser(newUser) {
      const action = createUser(newUser);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
