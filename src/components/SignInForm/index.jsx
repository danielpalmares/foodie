import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../../components/FormInput';
import SignUpButton from '../../components/SignUpButton';

import { IoPersonOutline, IoKeyOutline } from 'react-icons/io5';
import { Form } from './styles';

export default function SignInForm() {
  return (
    <Form>
      <FormInput
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        isRequired
        labelHtmlFor="username"
        label={<IoPersonOutline size={26} />}
      />

      <FormInput
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        isRequired
        labelHtmlFor="password"
        label={<IoKeyOutline size={26} />}
      />

      <Link to="/">Forgot password?</Link>

      <SignUpButton>Sign in</SignUpButton>
    </Form>
  );
}
