import {
  recipeInformationAction,
  clearRecipeInformation,
  fetchUploadedRecipeAction,
} from './actions';
import {
  RECIPE_INFORMATION_FOUND,
  RECIPE_INFORMATION_NOT_FOUND,
  CLEAR_RECIPE_INFORMATION,
  USER_RECIPE_FETCHED,
  USER_RECIPE_FAILURE_AT_FETCH,
} from './types';

const initialState = {
  recipe: null,
  recipeFork: null,
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
        recipeFork: action.payload.recipeInformation,
      };
    case USER_RECIPE_FETCHED:
      return {
        ...state,
        recipeFork: action.payload.recipeFork,
      };
    case USER_RECIPE_FAILURE_AT_FETCH:
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
}

export {
  recipeInformation,
  recipeInformationAction,
  clearRecipeInformation,
  fetchUploadedRecipeAction,
};
