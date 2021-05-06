import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SignUpForm from '../components/SignUpForm';

import { IoArrowBackOutline } from 'react-icons/io5';
import styles from '../styles/pages/SignUp.module.scss';

export default function SignUp() {
  const [emailError, setEmailError] = useState(false);

  const checkIfEmailExists = (arr, userEmail) => {
    const isEmailAlreadyExists = arr.some(obj => obj.userEmail === userEmail);
    return isEmailAlreadyExists;
  };

  const addUserData = newUser => {
    const users = localStorage.getItem('users');
    const usersParsed = JSON.parse(users);
    const usersArr = usersParsed === null ? [] : usersParsed;

    if (usersArr.length !== 0) {
      const isEmailInLS = checkIfEmailExists(usersArr, newUser.userEmail);

      if (isEmailInLS) return setEmailError(true);
    }

    newUser.userID = usersArr.length + 1;
    const newUsersArr = usersArr;
    newUsersArr.push(newUser);

    return localStorage.setItem('users', JSON.stringify(newUsersArr));
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

        {emailError && (
          <span className={styles.emailError}>
            An account with this email already exists.
          </span>
        )}
      </div>

      <SignUpForm handleGetData={addUserData} />
    </div>
  );
}
