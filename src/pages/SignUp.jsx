import React from 'react';
import { Link } from 'react-router-dom';

import {
  IoMailOutline,
  IoKeyOutline,
  IoArrowForwardOutline,
  IoMaleOutline,
  IoFemaleOutline,
  IoCalendarOutline,
  IoPersonOutline,
  IoArrowBackOutline,
} from 'react-icons/io5';
import styles from '../styles/pages/SignUp.module.scss';

export default function SignUp() {
  return (
    <div className={styles.login}>
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
          <Link to="/">
            <IoArrowBackOutline size={14} />
            Go to login page.
          </Link>
        </span>
      </div>

      <form action="">
        <div className={styles.nameContainer}>
          <label htmlFor="firstName">
            <IoPersonOutline size={26} />
          </label>
          <input type="text" id="firstName" placeholder="First Name" />
        </div>

        <div className={styles.emailContainer}>
          <label htmlFor="email">
            <IoMailOutline size={26} />
          </label>
          <input type="email" id="email" placeholder="Email" />
        </div>

        <div className={styles.passwordContainer}>
          <label htmlFor="password">
            <IoKeyOutline size={26} />
          </label>
          <input type="password" id="password" placeholder="Password" />
        </div>

        <div className={styles.genderContainer}>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            className={styles.inpMale}
          />
          <label htmlFor="male" className={styles.lbnMale}>
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
          <label htmlFor="female" className={styles.lbnFemale}>
            <IoFemaleOutline size={26} />
            <span>Female</span>
          </label>
        </div>

        <span className={styles.terms}>Data are stored in the local storage.</span>

        <button type="submit"> 
          Sign Up <IoArrowForwardOutline size={26} />
        </button>
      </form>
    </div>
  );
}
