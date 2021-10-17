import { foodieMulti } from '../../../config/axios';

export async function uploadRecipeAction(recipe) {
  const ingredients = JSON.stringify(recipe.ingredients);
  const instructions = JSON.stringify(recipe.instructions);

  recipe.ingredients = ingredients;
  recipe.instructions = instructions;

  try {
    const response = await foodieMulti.post('/recipe', recipe);

    return {
      type: 'RECIPE_UPLOADED',
      payload: response.statusText,
    };
  } catch (error) {
    return {
      type: 'RECIPE_NOT_UPLOADED',
      payload: {
        message: error.response.data.message,
      },
    };
  }
}
