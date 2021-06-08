import React from 'react';

import { Container } from './styles';

export default function SpeechBubble({ children, active, handleClick }) {
  return (
    <>
      <Container onClick={handleClick} active={active}>
        {children}
      </Container>
    </>
  );
}
