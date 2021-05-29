import React from 'react';

import { IoArrowForwardOutline, IoTimerOutline } from 'react-icons/io5';
import { RecipeCardContainer, RecipeCardInfo, RecipeCardTitle } from './styles';

export default function AppRecipeCard({
  title,
  cookingTime,
  imageSrc,
  handleRecipe,
}) {
  return (
    <>
      <RecipeCardContainer imageSrc="/images/pasta.jpg" onClick={handleRecipe}>
        <RecipeCardInfo>
          <span>
            How to make <IoArrowForwardOutline size={14} />
          </span>

          <RecipeCardTitle>{title}</RecipeCardTitle>

          <span>
            <IoTimerOutline size={14} /> {cookingTime} min
          </span>
        </RecipeCardInfo>
      </RecipeCardContainer>
    </>
  );
}
