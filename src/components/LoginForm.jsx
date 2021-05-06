import React from 'react';
import { Link } from 'react-router-dom';

import {
  IoMailOutline,
  IoKeyOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';
import styles from '../styles/components/LoginForm.module.scss';

export default function LoginForm() {
  return (
    <form action="">
      <div className={styles.emailContainer}>
        <label htmlFor="email">
          <IoMailOutline size={26} />
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        /> 
      </div>

      <div className={styles.passwordContainer}>
        <label htmlFor="password">
          <IoKeyOutline size={26} />
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
      </div>

      <span>
        <Link to="/">Forgot password?</Link>
      </span>

      <button type="submit">
        Login <IoArrowForwardOutline size={26} />
      </button>
    </form>
  );
}
