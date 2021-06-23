import { RECIPE_UPLOADED, RECIPE_NOT_UPLOADED } from './types';
import { uploadRecipeAction } from './actions';

const initialState = {
  status: '',
  errorStatus: '',
};

function uploadedRecipe(state = initialState, action) {
  switch (action.type) {
    case RECIPE_UPLOADED:
      return {
        ...state,
        status: action.payload.status,
      };
    case RECIPE_NOT_UPLOADED:
      return {
        ...state,
        errorStatus: action.payload.errorStatus,
      };
    default:
      return state;
  }
}

export { uploadedRecipe, uploadRecipeAction };
