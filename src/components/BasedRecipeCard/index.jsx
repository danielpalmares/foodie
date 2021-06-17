import React from 'react';

import { Container, TextContainer } from './styles';

export default function BasedRecipeCard({
  image,
  title,
  handleClick,
  data,
  text,
}) {
  return (
    <Container
      imageSrc={`${process.env.PUBLIC_URL + 'images/' + image + '.jpg'}`}
      onClick={handleClick}
      data-cuisine={data}
    >
      <TextContainer>
        <span>{title}</span>
        <p>{text}</p>
      </TextContainer>
    </Container>
  );
}
