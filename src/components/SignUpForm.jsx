import React from 'react';

import {
  IoPersonOutline,
  IoMailOutline,
  IoKeyOutline,
  IoMaleOutline,
  IoFemaleOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';
import styles from '../styles/components/SignUpForm.module.scss';

export default function SignUpForm() {
  return (
    <form action="">
      <div className={styles.nameContainer}>
        <label htmlFor="firstName">
          <IoPersonOutline size={26} />
        </label>
        <input type="text" id="firstName" placeholder="First Name" required />
      </div>

      <div className={styles.emailContainer}>
        <label htmlFor="email">
          <IoMailOutline size={26} />
        </label>
        <input type="email" id="email" placeholder="Email" required />
      </div>

      <div className={styles.passwordContainer}>
        <label htmlFor="password">
          <IoKeyOutline size={26} />
        </label>
        <input type="password" id="password" placeholder="Password" required />
      </div>

      <div className={styles.genderContainer}>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          className={styles.inpMale}
          defaultChecked
        />
        <label htmlFor="male">
          <IoMaleOutline size={26} />
          <span>Male</span>
        </label>

        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          className={styles.inpFemale}
        />
        <label htmlFor="female">
          <IoFemaleOutline size={26} />
          <span>Female</span>
        </label>
      </div>

      <span className={styles.terms}>
        Data are stored in the local storage.
      </span>

      <button type="submit">
        Sign Up <IoArrowForwardOutline size={26} />
      </button>
    </form>
  );
}
