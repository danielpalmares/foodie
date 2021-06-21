import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../../components/FormInput';
import SubmitButton from '../SubmitButton';

import { IoPersonOutline, IoKeyOutline } from 'react-icons/io5';
import { Form } from './styles';

export default function SignInForm({ handleGetData }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    return handleGetData(user);
  }

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <FormInput
        type="text"
        id="username"
        placeholder="Username"
        isRequired
        label={<IoPersonOutline size={26} />}
        handleChange={e => setUsername(e.target.value)}
      />

      <FormInput
        type="password"
        id="password"
        placeholder="Password"
        isRequired
        label={<IoKeyOutline size={26} />}
        handleChange={e => setPassword(e.target.value)}
      />

      <Link to="/">Forgot password?</Link>

      <SubmitButton>Sign in</SubmitButton>
    </Form>
  );
}
