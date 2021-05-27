import React from 'react';
import { Link } from 'react-router-dom';

import SignInForm from '../../components/SignInForm';
import LandingHeader from '../../components/LandingHeader';

import { IoArrowForwardOutline } from 'react-icons/io5';
import { SignInContainer, Directions } from './styles';

export default function SignIn() {
  return (
    <SignInContainer>
      <LandingHeader />

      <Directions>
        <h1>
          Hey, <br />
          Sign in now.
        </h1>

        <div>
          <span>Are you new?</span> <br />
          <Link to="/signup">
            Let's create a new account <IoArrowForwardOutline size={14} />
          </Link>
        </div>
      </Directions>

      <SignInForm />
    </SignInContainer>
  );
}
