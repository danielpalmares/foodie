import React from 'react';

import { IoArrowForwardOutline, IoTimerOutline } from 'react-icons/io5';
import {
  RecipeCardContainer,
  RecipeCardInfo,
  RecipeCardInfoContainer,
  RecipeCardTitle,
} from './styles';

export default function AppRecipeCard({
  title = 'Pizza brasileira feita',
  cookingTime,
  imageSrc,
  handleRecipe,
}) {
  return (
    <>
      <RecipeCardContainer imageSrc="/images/pasta.jpg" onClick={handleRecipe}>
        <RecipeCardInfo>
          <RecipeCardTitle>{title}</RecipeCardTitle>

          <RecipeCardInfoContainer>
            <span>
              <IoTimerOutline size={14} /> {cookingTime} min
            </span>
            <span>
              How to make <IoArrowForwardOutline size={14} />
            </span>
          </RecipeCardInfoContainer>
        </RecipeCardInfo>
      </RecipeCardContainer>
    </>
  );
}
