import React from 'react';

import { IoSadOutline } from 'react-icons/io5';

import { Container } from './styles';

export default function NoRecipeCard({ message }) {
  return (
    <Container>
      <div>
        <p>{message}</p>
        <span>
          <IoSadOutline size={26} />
        </span>
      </div>
    </Container>
  );
}
