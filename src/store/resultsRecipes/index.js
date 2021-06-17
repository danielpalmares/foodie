import { resultsRecipesAction } from './actions';
import { FOUND_RESULTS, RESULTS_NOT_FOUND } from './types';

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
    default:
      return state;
  }
}

export { resultsRecipes, resultsRecipesAction };
