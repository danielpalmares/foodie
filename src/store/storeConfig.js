import { combineReducers } from 'redux';

import { theme } from './theme';
import { recipesByIngredients } from './recipesByIngredients';
import { createUserReducer } from './createUser';

import { recipeVideos } from './recipeVideos';
import { activePage } from './activePage';
import { resultsRecipes } from './resultsRecipes';

export const rootReducer = combineReducers({
  theme,
  recipesByIngredients,
  createUserReducer,

  recipeVideos,
  activePage,
  resultsRecipes,
});
