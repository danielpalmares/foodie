import { foodie } from '../../../config/axios';
import { Recipe } from '../../../formatters/Recipe';

export async function getAllMyRecipesAction(userId) {
  try {
    const response = await foodie.get(`/recipes/${userId}`);
    const { recipes } = response.data;
    const myRecipes = new Recipe(recipes, null).recipes;

    return {
      type: 'ALL_MY_RECIPES',
      payload: myRecipes,
    };
  } catch (error) {
    return {
      type: 'ALL_MY_RECIPES_NOT_FOUND',
      payload: {
        message: error.response.data.message,
      },
    };
  }
}
