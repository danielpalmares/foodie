import { recipeInformationAction, clearRecipeInformation } from './actions';
import {
  RECIPE_INFORMATION_FOUND,
  RECIPE_INFORMATION_NOT_FOUND,
  CLEAR_RECIPE_INFORMATION,
} from './types';

const initialState = {
  recipe: null,
  status: '',
};

function recipeInformation(state = initialState, action) {
  switch (action.type) {
    case RECIPE_INFORMATION_FOUND:
      return {
        ...state,
        recipe: action.payload.recipeInformation,
      };
    case RECIPE_INFORMATION_NOT_FOUND:
      return {
        ...state,
        status: action.payload.status,
      };
    case CLEAR_RECIPE_INFORMATION:
      return {
        ...state,
        recipe: action.payload.recipeInformation,
      };
    default:
      return state;
  }
}

export { recipeInformation, recipeInformationAction, clearRecipeInformation };
