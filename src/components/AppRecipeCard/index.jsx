import React from 'react';

import { IoArrowForwardOutline, IoThumbsUpOutline } from 'react-icons/io5';

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
  showLikes,
}) {
  return (
    <RecipeCardContainer ref={refValue} imageSrc={imageSrc}>
      <RecipeCardInfo>
        <RecipeCardTitle>{title}</RecipeCardTitle>

        <RecipeCardInfoContainer>
          {showLikes && (
            <span>
              <IoThumbsUpOutline size={16} />
              {likes} {likes === 1 ? 'like' : 'likes'}
            </span>
          )}

          <button onClick={handleRecipe}>
            How to make <IoArrowForwardOutline size={14} />
          </button>
        </RecipeCardInfoContainer>
      </RecipeCardInfo>
    </RecipeCardContainer>
  );
}
