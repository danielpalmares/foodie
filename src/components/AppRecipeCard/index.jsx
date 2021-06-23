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
  likes = 0,
  imageSrc,
  handleRecipe,
  refValue,
  data,
}) {
  return (
    <RecipeCardContainer ref={refValue} imageSrc={imageSrc}>
      <RecipeCardInfo>
        <RecipeCardTitle>{title}</RecipeCardTitle>

        <RecipeCardInfoContainer>
          {likes > 0 && (
            <span>
              <IoHeartSharp size={26} color="#FE251B" /> {likes}{' '}
              {likes === 1 ? 'like' : 'likes'}
            </span>
          )}

          <button data-id={data} onClick={handleRecipe}>
            How to make <IoArrowForwardOutline size={14} />
          </button>
        </RecipeCardInfoContainer>
      </RecipeCardInfo>
    </RecipeCardContainer>
  );
}
