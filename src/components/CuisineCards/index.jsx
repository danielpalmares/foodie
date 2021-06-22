import React from 'react';

import { Container } from './styles';

export default function CuisineCards({ image, title, handleClick, data }) {
  return (
    <Container
      imageSrc={`${process.env.PUBLIC_URL + 'images/' + image + '.jpg'}`}
      onClick={handleClick}
      data-cuisine={data}
    >
      <span>{title}</span>
    </Container>
  );
}
