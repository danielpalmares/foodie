import { USER_RECIPE_FETCHED, USER_RECIPE_FAILURE_AT_FETCH } from '../types';
import { apiFetchUploadedRecipe } from '../../../services/forkify/api';

export async function fetchUploadedRecipeAction(id) {
  try {
    const response = await apiFetchUploadedRecipe.get(`${id}`);
    const { data, status, statusText } = response;

    if (status !== 200) throw new Error(statusText);

    const { recipe } = data.data;

    const recipeFormatted = {
      cookingTime: recipe.cooking_time,
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients.map(ing => {
        return {
          amount: ing.quantity,
          name: ing.description,
          unit: ing.unit,
        };
      }),
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
    };

    return {
      type: USER_RECIPE_FETCHED,
      payload: {
        recipeFork: recipeFormatted,
        status: statusText,
      },
    };
  } catch (err) {
    return {
      type: USER_RECIPE_FAILURE_AT_FETCH,
      payload: {
        recipeFork: null,
        status: err,
      },
    };
  }
}
