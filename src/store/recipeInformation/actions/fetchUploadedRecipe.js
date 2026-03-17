import { USER_RECIPE_FETCHED, USER_RECIPE_FAILURE_AT_FETCH } from '../types';
import { apiGetOneRecipe, apiGetUploadsUrl } from '../../../services/foodie/api';

export function fetchUploadedRecipeAction(id) {
  return async dispatch => {
    try {
      const { data } = await apiGetOneRecipe(id);

      // data is an array from formatRecipes; take the first item
      const recipe = Array.isArray(data) ? data[0] : data;

      if (!recipe) throw new Error('Recipe not found.');

      const baseUrl = apiGetUploadsUrl();
      const imageUrl = recipe.image?.url
        ? `${baseUrl.replace('/uploads', '')}${recipe.image.url}`
        : null;

      const recipeFormatted = {
        recipe_id: recipe.recipe_id,
        title: recipe.title,
        cookingTime: recipe.ready_in_minutes,
        servings: recipe.servings,
        image: imageUrl,
        ingredients: (recipe.ingredients || []).map(ing => ({
          name: ing.name,
          unit: ing.unit,
          amount: ing.amount,
        })),
        instructions: (recipe.instructions || []).map(ins => ({
          number: ins.step_number,
          step: ins.step,
        })),
      };

      return dispatch({
        type: USER_RECIPE_FETCHED,
        payload: { recipeFork: recipeFormatted, status: 'ok' },
      });
    } catch (err) {
      return dispatch({
        type: USER_RECIPE_FAILURE_AT_FETCH,
        payload: { recipeFork: null, status: err.message },
      });
    }
  };
}
