import { combineReducers } from 'redux';

import { activePage } from './activePage';
import { user } from './user';
import { theme } from './theme';
import { recipesByIngredients } from './recipesByIngredients';
import { recipeInformation } from './recipeInformation';
import { recipeVideos } from './recipeVideos';
import { resultsRecipes } from './resultsRecipes';

export const rootReducer = combineReducers({
  activePage,
  user,
  theme,
  recipesByIngredients,
  recipeInformation,
  recipeVideos,
  resultsRecipes,
});
