import React from 'react';
import styled from 'styled-components';

import Wrapper from '../components/Wrapper';
import Header from '../components/AppHeader';
import Navigation from '../components/Navigation';

const Container = styled.div`
  padding: 0 1rem;
`;

export default function Layout({
  children,
  onlyBackButton,
  profileHeader,
  defaultHeader,
}) {
  return (
    <Wrapper>
      <Container>
        <Header
          onlyBackButton={onlyBackButton}
          profileHeader={profileHeader}
          defaultHeader={defaultHeader}
        />
        {children}
        <Navigation />
      </Container>
    </Wrapper>
  );
}
