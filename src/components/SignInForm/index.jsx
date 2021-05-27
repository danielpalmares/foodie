import React from 'react';
import { Link } from 'react-router-dom';

import {
  IoMailOutline,
  IoKeyOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';
import { Form, InputContainer } from './styles';

export default function SignInForm() {
  return (
    <>
      <Form>
        <InputContainer>
          <label htmlFor="email">
            <IoMailOutline size={26} />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="password">
            <IoKeyOutline size={26} />
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </InputContainer>

        <span>
          <Link to="/">Forgot password?</Link>
        </span>

        <button type="submit">
          Sign in <IoArrowForwardOutline size={26} />
        </button>
      </Form>
    </>
  );
}
