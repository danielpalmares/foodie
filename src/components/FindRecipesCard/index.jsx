import React from 'react';
import { Link } from 'react-router-dom';

import Star from '../../assets/brilhante.svg';
import { IoArrowForward } from 'react-icons/io5';
import { Container, IconContainer, TextContainer } from './styles';

export default function FindRecipesCard() {
  return (
    <>
      <Container>
        <IconContainer>
          <img src={Star} alt="Star" />
        </IconContainer>

        <TextContainer>
          <p>Find recipes based on what you already have at home</p>
          <Link to="/search">
            Let's try!
            <IoArrowForward size={16} />
          </Link>
        </TextContainer>
      </Container>
    </>
  );
}
