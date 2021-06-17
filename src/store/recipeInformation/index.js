import { recipeInformationAction } from './actions';
import {
  RECIPE_INFORMATION_FOUND,
  RECIPE_INFORMATION_NOT_FOUND,
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
    default:
      return state;
  }
}

export { recipeInformation, recipeInformationAction };
