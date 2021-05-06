import React, { useState } from 'react';

import {
  IoPersonOutline,
  IoMailOutline,
  IoKeyOutline,
  IoMaleOutline,
  IoFemaleOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';
import styles from '../styles/components/SignUpForm.module.scss';

export default function SignUpForm({ handleGetData }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userGender, setUserGender] = useState('male');

  const handleNameChange = e => setUserName(e.target.value);
  const handleEmailChange = e => setUserEmail(e.target.value);
  const handlePasswordChange = e => setUserPassword(e.target.value);
  const handleMaleChange = e => {
    let isChecked = e.target.checked;
    isChecked && setUserGender('male');
  };
  const handleFemaleChange = e => {
    let isChecked = e.target.checked;
    isChecked && setUserGender('female');
  };

  const sendUserData = e => {
    e.preventDefault();

    const user = {
      userID: undefined,
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
      userGender: userGender
    }
    
    handleGetData(user);
  };

  return (
    <form action="">
      <div className={styles.nameContainer}>
        <label htmlFor="firstName">
          <IoPersonOutline size={26} />
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          onChange={e => handleNameChange(e)}
          required
        />
      </div>

      <div className={styles.emailContainer}>
        <label htmlFor="email">
          <IoMailOutline size={26} />
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={e => handleEmailChange(e)}
          required
        />
      </div>

      <div className={styles.passwordContainer}>
        <label htmlFor="password">
          <IoKeyOutline size={26} />
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={e => handlePasswordChange(e)}
          required
        />
      </div>

      <div className={styles.genderContainer}>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          className={styles.inpMale}
          onChange={e => handleMaleChange(e)}
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
          onChange={e => handleFemaleChange(e)}
        />
        <label htmlFor="female">
          <IoFemaleOutline size={26} />
          <span>Female</span>
        </label>
      </div>

      <span className={styles.terms}>
        Data are stored in the local storage.
      </span>

      <button type="submit" onClick={e => sendUserData(e)}>
        Sign Up <IoArrowForwardOutline size={26} />
      </button>
    </form>
  );
}
