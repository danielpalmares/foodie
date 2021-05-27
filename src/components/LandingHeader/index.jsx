import React from 'react';

import SignInButton from '../SignInButton/index';
import Logo from '../../assets/foodie-logo.svg';
import { Header } from './styles';

export default function LandingHeader({ hasSignInButton } = false) {
  return (
    <>
      <Header>
        <img src={Logo} alt="Foodie logo" />

        {hasSignInButton && <SignInButton />}
      </Header>
    </>
  );
}
