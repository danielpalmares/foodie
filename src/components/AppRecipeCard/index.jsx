import React from 'react';

import { IoArrowForwardOutline, IoHeartSharp } from 'react-icons/io5';
import {
  RecipeCardContainer,
  RecipeCardInfo,
  RecipeCardInfoContainer,
  RecipeCardTitle,
} from './styles';

export default function AppRecipeCard({
  title,
  likes,
  imageSrc,
  handleRecipe,
}) {
  return (
    <>
      <RecipeCardContainer imageSrc={imageSrc} onClick={handleRecipe}>
        <RecipeCardInfo>
          <RecipeCardTitle>{title}</RecipeCardTitle>

          <RecipeCardInfoContainer>
            <span>
              <IoHeartSharp size={26} color="#FE251B" /> {likes} likes
            </span>
            <button onClick={handleRecipe}>
              How to make <IoArrowForwardOutline size={14} />
            </button>
          </RecipeCardInfoContainer>
        </RecipeCardInfo>
      </RecipeCardContainer>
    </>
  );
}
