import { foodie } from '../../../config/axios';

export async function deleteRecipeAction(recipeId) {
  try {
    const response = await foodie.delete(`/recipe/${recipeId}`);

    return {
      type: 'RECIPE_DELETED',
      payload: response.statusText,
    };
  } catch (error) {
    return {
      type: 'RECIPE_NOT_DELETED',
      payload: {
        message: error.response.data.message,
      },
    };
  }
}
