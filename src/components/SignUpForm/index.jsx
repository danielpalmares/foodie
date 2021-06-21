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
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');

  // handle both gender
  const handleMaleChange = e => {
    const isChecked = e.target.checked;
    isChecked && setGender('male');
  };
  const handleFemaleChange = e => {
    const isChecked = e.target.checked;
    isChecked && setGender('female');
  };

  // handle user data
  function handleData(e) {
    e.preventDefault();

    const user = {
      id: undefined,
      name: name,
      username: username,
      email: email,
      password: password,
      gender: gender,
    };

    return handleGetData(user);
  }

  return (
    <Form onSubmit={e => handleData(e)}>
      <InputContainer>
        <label htmlFor="name">
          <IoPersonOutline size={26} />
        </label>

        <input
          type="text"
          id="name"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          required
        />
      </InputContainer>

      <InputContainer>
        <label htmlFor="username">
          <IoPersonOutline size={26} />
        </label>

        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
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
          onChange={e => setEmail(e.target.value)}
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
          onChange={e => setPassword(e.target.value)}
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

      <button type="submit">
        Sign up <IoArrowForwardOutline size={26} />
      </button>
    </Form>
  );
}
