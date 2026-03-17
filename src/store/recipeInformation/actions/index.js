import { apiGetOneRecipe, apiGetAllRecipes, apiGetUploadsUrl } from '../../../services/foodie/api';
import {
  RECIPE_INFORMATION_FOUND,
  RECIPE_INFORMATION_NOT_FOUND,
  CLEAR_RECIPE_INFORMATION,
} from '../types';

import { fetchUploadedRecipeAction } from './fetchUploadedRecipe';

function clearRecipeInformation() {
  return {
    type: CLEAR_RECIPE_INFORMATION,
    payload: { recipeInformation: null },
  };
}

function recipeInformationAction(id, random) {
  return async dispatch => {
    try {
      let recipe;

      if (random) {
        // Get all recipes and pick a random one
        const { data } = await apiGetAllRecipes();
        const recipes = Array.isArray(data) ? data : [];
        if (recipes.length === 0) throw new Error('No recipes found.');
        recipe = recipes[Math.floor(Math.random() * recipes.length)];
      } else if (id) {
        const { data } = await apiGetOneRecipe(id);
        recipe = Array.isArray(data) ? data[0] : data;
      }

      if (!recipe) throw new Error('Recipe not found.');

      const baseUrl = apiGetUploadsUrl().replace('/uploads', '');
      const imageUrl = recipe.image?.url ? `${baseUrl}${recipe.image.url}` : null;

      const recipeInformation = {
        id: recipe.recipe_id,
        title: recipe.title,
        image: imageUrl,
        cookingTime: recipe.ready_in_minutes,
        likes: 0,
        dairyFree: false,
        glutenFree: false,
        veryHealthy: false,
        veryPopular: false,
        sustainable: false,
        ingredients: (recipe.ingredients || []).map(ing => ({
          name: ing.name,
          amount: ing.amount,
          unit: ing.unit,
        })),
        servings: recipe.servings,
        instructions: (recipe.instructions || []).map(ins => ({
          number: ins.step_number,
          step: ins.step,
        })),
      };

      return dispatch({
        type: RECIPE_INFORMATION_FOUND,
        payload: { recipeInformation },
      });
    } catch (err) {
      return dispatch({
        type: RECIPE_INFORMATION_NOT_FOUND,
        payload: { status: err.message || err },
      });
    }
  };
}

export {
  recipeInformationAction,
  clearRecipeInformation,
  fetchUploadedRecipeAction,
};
