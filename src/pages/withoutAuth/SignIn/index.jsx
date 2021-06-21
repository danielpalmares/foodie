import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SignInForm from '../../../components/SignInForm';
import LandingHeader from '../../../components/LandingHeader';

import { IoArrowForwardOutline } from 'react-icons/io5';
import { SignInContainer, Directions } from './styles';
import AppTitle from '../../../components/AppTitle';

import { signInAction } from '../../../store/user';
import { useEffect } from 'react';

export default function SignIn() {
  const dispatch = useDispatch();
  const { errorStatus, user } = useSelector(state => state.user);
  console.log(user);

  function handleForm(data) {
    return dispatch(signInAction(data));
  }

  return (
    <SignInContainer>
      <LandingHeader />

      <Directions>
        <AppTitle>
          Hey,
          <br />
          Sign in now.
        </AppTitle>

        <div>
          <span>Are you new?</span>
          <br />
          <Link to="/signup">
            Let's create a new account <IoArrowForwardOutline size={16} />
          </Link>
        </div>
      </Directions>

      <h6>{errorStatus}</h6>

      <SignInForm handleGetData={data => handleForm(data)} />
    </SignInContainer>
  );
}
