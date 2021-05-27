import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SignUpForm from '../../../components/SignUpForm/index';
import LandingHeader from '../../../components/LandingHeader';

import { IoArrowBackOutline } from 'react-icons/io5';

import { useDispatch } from 'react-redux';
import { createUserAction } from '../../../store/createUser';

import { SignUpContainer, Directions, ErrorMessage } from './styles';

export default function SignUp() {
  const dispatch = useDispatch();

  const createNewUser = user => {
    dispatch(createUserAction(user));
  };

  const status = 'error';

  return (
    <SignUpContainer>
      <LandingHeader />

      <Directions>
        <h1>
          Hey, <br />
          Sign up now.
        </h1>

        <div>
          <span>Already have an account?</span>
          <br />
          <Link to="/signin">
            <IoArrowBackOutline size={14} />
            Go to login page.
          </Link>
        </div>

        {status === 'error' && (
          <ErrorMessage>
            An account with this email already exists.
          </ErrorMessage>
        )}
      </Directions>

      <SignUpForm handleGetData={createNewUser} />
    </SignUpContainer>
  );
}
