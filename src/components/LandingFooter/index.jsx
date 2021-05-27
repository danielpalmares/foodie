import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/foodie-logo.svg';
import { IoLogoGithub } from 'react-icons/io5';
import { Footer } from './styles';

export default function LandingFooter() {
  return (
    <>
      <Footer>
        <div>
          <Link to="/">
            <button>
              <IoLogoGithub size={26} />
            </button>
          </Link>
        </div>

        <img src={Logo} alt="Foodie logo" />

        <p>
          &copy; Copyright by Foodie. You can use it for learning but
          <strong> don't</strong> claim as your own.
        </p>
      </Footer>
    </>
  );
}
