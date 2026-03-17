import {
  RECIPE_UPLOADED,
  RECIPE_NOT_UPLOADED,
  CLEAR_UPLOADED_RECIPE_STATUS,
} from '../types';
import { apiCreateRecipe } from '../../../services/foodie/api';

export function clearUploadStatusAction() {
  return {
    type: CLEAR_UPLOADED_RECIPE_STATUS,
    payload: { status: '', errorStatus: '' },
  };
}

export function uploadRecipeAction(newRecipe) {
  return async (dispatch, getState) => {
    try {
      const { user } = getState().user;

      const formData = new FormData();
      formData.append('title', newRecipe.title);
      formData.append('servings', String(newRecipe.servings));
      formData.append('ready_in_minutes', String(newRecipe.ready_in_minutes));
      formData.append('author_id', user.user_id);
      formData.append('recipe-photo', newRecipe.photo);
      formData.append('ingredients', JSON.stringify(newRecipe.ingredients));
      formData.append('instructions', JSON.stringify(newRecipe.instructions));

      await apiCreateRecipe(formData);

      return dispatch({
        type: RECIPE_UPLOADED,
        payload: {
          status: 'Congratulations! Your recipe was successfully uploaded.',
          errorStatus: '',
        },
      });
    } catch (err) {
      const message =
        err?.response?.data?.message || err.message || 'Error uploading recipe.';

      return dispatch({
        type: RECIPE_NOT_UPLOADED,
        payload: { status: '', errorStatus: message },
      });
    }
  };
}
