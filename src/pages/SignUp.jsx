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
          <Link to="/">Go to login page.</Link>
        </span>
      </div>

      <form action="">
        <label htmlFor="firstName" className={styles.lbnName}>
          <IoPersonOutline size={26} />
        </label>
        <input type="text" id="firstName" placeholder="First Name" />

        <label htmlFor="email" className={styles.lbnEmail}>
          <IoMailOutline size={26} />
        </label>
        <input type="email" id="email" placeholder="Email" />

        <label htmlFor="password" className={styles.lbnPassword}>
          <IoKeyOutline size={26} />
        </label>
        <input type="password" id="password" placeholder="Password" />

        <label htmlFor="birthday" className={styles.lbnBirthday}>
          <IoCalendarOutline size={26} />
        </label>
        <input type="date" id="birthday" />

        <div className={styles.genderContainer}>
          <div>
            <label htmlFor="male" className={styles.lbnMale}>
              <IoMaleOutline size={26} />
              <span>Male</span> 
            </label>
            <input type="checkbox" name="gender" id="male" value="male" />
          </div>

          <div>
            <label htmlFor="female" className={styles.lbnFemale}>
              <IoFemaleOutline size={26} />
              <span>Female</span> 
            </label>
            <input type="checkbox" name="gender" id="female" value="female" />
          </div>
        </div>

        <span>Data are stored in the local storage.</span>

        <button type="submit">
          Sign Up <IoArrowForwardOutline size={26} />
        </button>
      </form>
    </div>
  );
}
