import React from 'react';
import { Link } from 'react-router-dom';

import { IoArrowForward } from 'react-icons/io5';
import { Container, IconContainer, TextContainer } from './styles';

export default function FindRecipesCard({ image, direction = '#', text }) {
  return (
    <Container>
      <IconContainer>
        <img src={image} alt="Star" />
      </IconContainer>

      <TextContainer>
        <p>{text}</p>
        <Link to={direction}>
          Let's try!
          <IoArrowForward size={16} />
        </Link>
      </TextContainer>
    </Container>
  );
}
