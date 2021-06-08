import React from 'react';

import { Container } from './styles';

export function SpeechBubble({ children }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
