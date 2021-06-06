import { combineReducers } from 'redux';

import { createUserReducer } from './createUser';
import { switchThemeReducer } from './switchTheme';
import { recipesByIngredientsReducer } from './recipesByIngredients';
import { recipesByName } from './recipesByName';

export const rootReducer = combineReducers({
  createUserReducer,
  switchThemeReducer,
  recipesByIngredientsReducer,
  recipesByName,
});
