import React from 'react';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    max-width: 668px;
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
  }
`;

export default function Wrapper({ children }) {
  return <WrapperContainer>{children}</WrapperContainer>;
}
