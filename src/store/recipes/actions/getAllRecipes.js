import { foodie } from '../../../config/axios';
import { Recipe } from '../../../formatters/Recipe';

export async function getAllRecipesAction() {
  try {
    const response = await foodie.get('/recipes');
    const { recipes } = response.data;
    const formattedRecipes = new Recipe(recipes, null).recipes;

    return {
      type: 'ALL_RECIPES',
      payload: formattedRecipes,
    };
  } catch (error) {
    return {
      type: 'ALL_RECIPES_NOT_FOUND',
      payload: {
        message: error.response.data.message,
      },
    };
  }
}
