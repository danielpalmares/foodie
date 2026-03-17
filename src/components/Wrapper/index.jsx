import React from 'react';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  padding: 0 1.5rem;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: none;
    margin: 0;
    padding: 0 3rem 0 calc(260px + 3rem);
  }

  @media screen and (min-width: 1440px) {
    padding: 0 4rem 0 calc(260px + 4rem);
  }
`;

export default function Wrapper({ children }) {
  return <WrapperContainer>{children}</WrapperContainer>;
}
