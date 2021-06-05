import React from 'react';

import { Container } from './styles';

export default function BasedRecipeCard({ image, title, handleClick }) {
  return (
    <>
      <Container
        imageSrc={`${process.env.PUBLIC_URL + 'images/' + image + '.jpg'}`}
        onClick={handleClick}
      >
        <span>{title}</span>
      </Container>
    </>
  );
}
