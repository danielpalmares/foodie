import React, { useState } from 'react';

import FormInput from '../FormInput';
import SubmitButton from '../SubmitButton';

import {
  IoPersonOutline,
  IoMailOutline,
  IoKeyOutline,
  IoMaleOutline,
  IoFemaleOutline,
  IoPersonCircleOutline,
} from 'react-icons/io5';
import { Form, GenderContainer, Warning } from './styles';

export default function SignUpForm({ handleGetData }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');

  const handleMaleChange = e => {
    const isChecked = e.target.checked;
    isChecked && setGender('male');
  };
  const handleFemaleChange = e => {
    const isChecked = e.target.checked;
    isChecked && setGender('female');
  };

  function handleForm(e) {
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
    <Form onSubmit={e => handleForm(e)}>
      <FormInput
        type="text"
        id="name"
        placeholder="Name"
        handleChange={e => setName(e.target.value.trim())}
        label={<IoPersonCircleOutline size={26} />}
        isRequired
      />

      <FormInput
        type="text"
        id="username"
        placeholder="Username"
        handleChange={e => setUsername(e.target.value.toLowerCase().trim())}
        label={<IoPersonOutline size={26} />}
        isRequired
      />

      <FormInput
        type="email"
        id="email"
        placeholder="Email"
        handleChange={e => setEmail(e.target.value.trim())}
        label={<IoMailOutline size={26} />}
        isRequired
      />

      <FormInput
        type="password"
        id="password"
        placeholder="Password"
        handleChange={e => setPassword(e.target.value)}
        label={<IoKeyOutline size={26} />}
        isRequired
      />

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

      <SubmitButton>Sign up</SubmitButton>
    </Form>
  );
}
