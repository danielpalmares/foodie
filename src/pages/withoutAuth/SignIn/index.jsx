import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SignInForm from '../../../components/SignInForm';
import LandingHeader from '../../../components/LandingHeader';

import { IoArrowForwardOutline } from 'react-icons/io5';
import { SignInContainer, Directions, ErrorMessage } from './styles';
import AppTitle from '../../../components/AppTitle';

import { signInAction } from '../../../store/user';
import BlockLoadingScreen from '../../../components/BlockLoadingScreen';

export default function SignIn() {
  const dispatch = useDispatch();

  const { signInErrorStatus, loading } = useSelector(state => state.user);

  function handleForm(data) {
    dispatch(signInAction(data));
  }

  return (
    <SignInContainer>
      {loading && <BlockLoadingScreen />}
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

        {signInErrorStatus && <ErrorMessage>{signInErrorStatus}</ErrorMessage>}
      </Directions>

      <SignInForm handleGetData={handleForm} />
    </SignInContainer>
  );
}
