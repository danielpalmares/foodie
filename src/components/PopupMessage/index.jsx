import React from 'react';

import { Container } from './styles';

export default function PopupMessage({ message, isActive, handleClick }) {
  return (
    <Container isActive={isActive}>
      <div>
        <p>{message}</p>

        <button onClick={handleClick}>Okay</button>
      </div>
    </Container>
  );
}
