import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../components/LoginForm';

import { IoArrowForwardOutline } from 'react-icons/io5';
import styles from '../styles/pages/Login.module.scss';

export default function Login() {
  

  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        <h1>CT</h1>
      </div>

      <div className={styles.directions}>
        <h1>
          Hey, <br />
          Login Now.
        </h1>

        <span>
          Are you new? <br />
          <Link to="/signup">
            Let's create a new account <IoArrowForwardOutline size={14} />
          </Link>
        </span>
      </div>

      <LoginForm />
    </div>
  );
}
