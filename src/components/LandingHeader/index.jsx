import React from 'react';

import Wrapper from '../Wrapper';
import SignInButton from '../SignInButton';

import Logo from '../../assets/foodie-logo.svg';
import { Header } from './styles';

export default function LandingHeader({ hasSignInButton }) {
  return (
    <Header>
      <img src={Logo} alt="Foodie logo" />

      {hasSignInButton && <SignInButton />}
    </Header>
  );
}
