import React from 'react';

import Spinner from '../Spinner';

import { Container } from './styles';

export default function BlockLoadingScreen() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
