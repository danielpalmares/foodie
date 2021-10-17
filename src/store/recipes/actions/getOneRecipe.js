import { foodie } from '../../../config/axios';
import { Recipe } from '../../../formatters/Recipe';

export async function getOneRecipeAction(recipeId) {
  try {
    const response = await foodie.get(`/recipe/${recipeId}`);
    const recipe = response.data;
    const formattedRecipe = new Recipe(null, recipe).recipe;

    return {
      type: 'ONE_RECIPE_FOUND',
      payload: formattedRecipe,
    };
  } catch (error) {
    return {
      type: 'ONE_RECIPE_NOT_FOUND',
      payload: {
        message: error.response.data.message,
      },
    };
  }
}
