import React from 'react';

import Logo from '../../assets/foodie-logo.svg';
import { Footer } from './styles';

export default function LandingFooter() {
  return (
    <Footer>
      <img src={Logo} alt="Foodie logo" />

      <p>
        &copy; Copyright by Foodie. You can use it for learning but
        <strong> don't</strong> claim as your own.
      </p>
    </Footer>
  );
}
