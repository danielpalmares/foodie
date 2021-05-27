import React, { useState } from 'react';

import {
  IoPersonOutline,
  IoMailOutline,
  IoKeyOutline,
  IoMaleOutline,
  IoFemaleOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';
import { Form, InputContainer, GenderContainer, Warning } from './styles';

export default function SignUpForm({ handleGetData }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userGender, setUserGender] = useState('male');

  // handle input name, email and password
  const handleNameChange = e => setUserName(e.target.value);
  const handleEmailChange = e => setUserEmail(e.target.value);
  const handlePasswordChange = e => setUserPassword(e.target.value);

  // handle both gender
  const handleMaleChange = e => {
    const isChecked = e.target.checked;
    isChecked && setUserGender('male');
  };
  const handleFemaleChange = e => {
    const isChecked = e.target.checked;
    isChecked && setUserGender('female');
  };

  // handle user data
  const sendUserData = e => {
    e.preventDefault();

    const user = {
      userID: undefined,
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
      userGender: userGender,
    };
    handleGetData(user);
  };

  return (
    <Form>
      <InputContainer>
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
      </InputContainer>

      <InputContainer>
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
      </InputContainer>

      <InputContainer>
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
      </InputContainer>

      <GenderContainer>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
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
          onChange={e => handleFemaleChange(e)}
        />
        <label htmlFor="female">
          <IoFemaleOutline size={26} />
          <span>Female</span>
        </label>
      </GenderContainer>

      <Warning>Data are stored in the local storage</Warning>

      <button type="submit" onClick={e => sendUserData(e)}>
        Sign up <IoArrowForwardOutline size={26} />
      </button>
    </Form>
  );
}
