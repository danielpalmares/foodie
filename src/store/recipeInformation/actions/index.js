import { apiGetRecipeInformation } from '../../../services/spoonacular/api';
import {
  RECIPE_INFORMATION_FOUND,
  RECIPE_INFORMATION_NOT_FOUND,
  CLEAR_RECIPE_INFORMATION,
} from '../types';

export function clearRecipeInformation() {
  return {
    type: CLEAR_RECIPE_INFORMATION,
    payload: {
      recipeInformation: null,
    },
  };
}

export async function recipeInformationAction(id) {
  try {
    const response = await apiGetRecipeInformation.get(`${id}/information`);
    const { data, status, statusText } = response;

    if (status !== 200) throw new Error(statusText);

    const recipeInformation = {
      id: data.id,
      title: data.title,
      image: data.image,
      cookingTime: data.readyInMinutes,
      likes: data.aggregateLikes,

      dairyFree: data.dairyFree,
      glutenFree: data.glutenFree,
      veryHealthy: data.veryHealthy,
      veryPopular: data.veryPopular,
      sustainable: data.sustainable,

      ingredients: data.extendedIngredients.map(ingredient => {
        return {
          name: ingredient.name,
          amount: ingredient.amount,
          unit: ingredient.unit,
        };
      }),
      servings: data.servings,

      instructions: data.analyzedInstructions[0].steps.map(step => {
        return {
          number: step.number,
          step: step.step,
        };
      }),
    };

    return {
      type: RECIPE_INFORMATION_FOUND,
      payload: {
        recipeInformation: recipeInformation,
      },
    };
  } catch (err) {
    return {
      type: RECIPE_INFORMATION_NOT_FOUND,
      payload: {
        status: err,
      },
    };
  }
}
