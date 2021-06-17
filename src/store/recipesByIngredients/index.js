import { recipesByIngredientsAction } from './actions';
import {
  FOUND_RECIPES_BY_INGREDIENTS,
  RECIPES_BY_INGREDIENTS_NOT_FOUND,
} from './types';

const initialState = {
  data: null,
  status: '',
};

function recipesByIngredients(state = initialState, action) {
  switch (action.type) {
    case FOUND_RECIPES_BY_INGREDIENTS:
      return {
        ...state,
        data: action.payload.recipes,
      };
    case RECIPES_BY_INGREDIENTS_NOT_FOUND:
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
}

export { recipesByIngredients, recipesByIngredientsAction };
