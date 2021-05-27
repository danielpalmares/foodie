import React from 'react';

import { Container } from './styles';

export default function BasedRecipeCard({
  image,
  basedIngredient,
  handleClick,
}) {
  return (
    <>
      <Container
        imageSrc={`${process.env.PUBLIC_URL + 'images/' + image}`}
        onClick={handleClick}
      >
        <span>{basedIngredient} Based Recipes</span>
      </Container>
    </>
  );
}
