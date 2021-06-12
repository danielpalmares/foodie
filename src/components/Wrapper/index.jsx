import React from 'react';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 668px;
    margin: 0 auto;
  }
`;

export default function Wrapper({ children }) {
  return <WrapperContainer>{children}</WrapperContainer>;
}
