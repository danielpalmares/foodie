import { combineReducers } from 'redux';

import { createUserReducer } from './createUser';
import { switchThemeReducer } from './switchTheme';
import { recipesByIngredientsReducer } from './recipesByIngredients';
import { recipesByName } from './recipesByName';
import { recipesByType } from './recipesByType';

export const rootReducer = combineReducers({
  createUserReducer,
  switchThemeReducer,
  recipesByIngredientsReducer,
  recipesByName,
  recipesByType,
});
