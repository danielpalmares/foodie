import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SignUpForm from '../../../components/SignUpForm/index';
import LandingHeader from '../../../components/LandingHeader';

import { IoArrowBackOutline } from 'react-icons/io5';

import { useDispatch, useSelector } from 'react-redux';
import { signUpAction, reSignInAction } from '../../../store/user';

import AppTitle from '../../../components/AppTitle';
import { SignUpContainer, Directions, ErrorMessage } from './styles';

import BlockLoadingScreen from '../../../components/BlockLoadingScreen';

export default function SignUp() {
  const dispatch = useDispatch();

  const { signUpErrorStatus } = useSelector(state => state.user);
  const [isBlockScreen, setIsBlockScreen] = useState(false);

  function handleForm(account) {
    setIsBlockScreen(true);
    setTimeout(() => {
      return dispatch(signUpAction(account));
    }, 1 * 1000);
  }

  useEffect(() => {
    if (!signUpErrorStatus) return;

    setIsBlockScreen(false);
  }, [signUpErrorStatus]);

  return (
    <SignUpContainer>
      {isBlockScreen && <BlockLoadingScreen />}
      <LandingHeader />

      <Directions>
        <AppTitle>
          Hey, <br />
          Sign up now.
        </AppTitle>

        <div>
          <span>Already have an account?</span>
          <br />
          <Link to="/signin">
            <IoArrowBackOutline size={16} /> Go to login page.
          </Link>
        </div>

        {signUpErrorStatus && <ErrorMessage>{signUpErrorStatus}</ErrorMessage>}
      </Directions>

      <SignUpForm handleGetData={handleForm} />
    </SignUpContainer>
  );
}
