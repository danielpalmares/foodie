import { resultsRecipesAction, clearResultsRecipesAction } from './actions';
import {
  FOUND_RESULTS,
  RESULTS_NOT_FOUND,
  CLEAR_RESULTS_RECIPES,
} from './types';

const initialState = {
  recipes: null,
  status: '',
};

function resultsRecipes(state = initialState, action) {
  switch (action.type) {
    case FOUND_RESULTS:
      return {
        ...state,
        recipes: action.payload.recipes,
      };
    case RESULTS_NOT_FOUND:
      return {
        ...state,
        status: action.payload.status,
      };
    case CLEAR_RESULTS_RECIPES: {
      return {
        ...state,
        recipes: action.payload.recipes,
      };
    }
    default:
      return state;
  }
}

export { resultsRecipes, resultsRecipesAction, clearResultsRecipesAction };
