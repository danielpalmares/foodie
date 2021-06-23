import {
  RECIPE_UPLOADED,
  RECIPE_NOT_UPLOADED,
  CLEAR_UPLOADED_RECIPE_STATUS,
} from './types';
import { uploadRecipeAction, clearUploadStatusAction } from './actions';

const initialState = {
  status: '',
  errorStatus: '',
};

function uploadedRecipe(state = initialState, action) {
  switch (action.type) {
    case CLEAR_UPLOADED_RECIPE_STATUS:
      return {
        ...state,
        status: action.payload.status,
        errorStatus: action.payload.errorStatus,
      };
    case RECIPE_UPLOADED:
      return {
        ...state,
        status: action.payload.status,
        errorStatus: action.payload.errorStatus,
      };
    case RECIPE_NOT_UPLOADED:
      return {
        ...state,
        status: action.payload.status,
        errorStatus: action.payload.errorStatus,
      };
    default:
      return state;
  }
}

export { uploadedRecipe, uploadRecipeAction, clearUploadStatusAction };
