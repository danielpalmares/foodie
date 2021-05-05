import React from 'react';
import { Link } from 'react-router-dom';

import {
  IoMailOutline,
  IoKeyOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';
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
          <Link to="/">Let's create a new account!</Link>
        </span>
      </div>

      <form action="">
        <label htmlFor="email" className={styles.lbnEmail}>
          <IoMailOutline size={26} />
        </label>
        <input type="email" name="email" id="email" placeholder="Email" />

        <label htmlFor="password" className={styles.lbnPassword}>
          <IoKeyOutline size={26} />
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <span>
          <Link to="/">Forgot password?</Link>
        </span>

        <button type="submit">
          Login <IoArrowForwardOutline size={26} />
        </button>
      </form>
    </div>
  );
}
