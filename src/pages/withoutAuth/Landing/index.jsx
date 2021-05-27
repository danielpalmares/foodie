import React from 'react';

import SignUpButton from '../../../components/SignUpButton';
import LandingHeader from '../../../components/LandingHeader';
import LandingFooter from '../../../components/LandingFooter';

import blob from '../../../assets/blob.svg';
import { LandingContainer, LandingContent, BlobContainer } from './styles';

export default function Landing() {
  return (
    <>
      <LandingContainer>
        <BlobContainer>
          <img src={blob} alt="Foodie Blob" />
        </BlobContainer>

        <LandingContent>
          <LandingHeader hasSignInButton />
          <main>
            <h1>Search over 1,000,000 recipes</h1>
            <h2>Make your own recipe, and more...</h2>
            <h3>What are you waiting for?</h3>
            <SignUpButton />
          </main>
        </LandingContent>
      </LandingContainer>

      <LandingFooter />
    </>
  );
}
