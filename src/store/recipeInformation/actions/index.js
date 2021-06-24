import {
  apiGetRecipeInformation,
  apiGetRandom,
} from '../../../services/spoonacular/api';
import {
  RECIPE_INFORMATION_FOUND,
  RECIPE_INFORMATION_NOT_FOUND,
  CLEAR_RECIPE_INFORMATION,
} from '../types';

import { fetchUploadedRecipeAction } from './fetchUploadedRecipe';

function clearRecipeInformation() {
  return {
    type: CLEAR_RECIPE_INFORMATION,
    payload: {
      recipeInformation: null,
    },
  };
}

async function recipeInformationAction(id, random) {
  console.log('oi');
  try {
    async function randomRec() {
      if (random) {
        const response = await apiGetRandom.get(`random`);
        return response;
      }
    }

    async function idRec() {
      if (id) {
        const response = await apiGetRecipeInformation.get(`${id}/information`);
        return response;
      }
    }

    const res = random ? await randomRec() : await idRec();
    const { status, statusText } = res;

    if (status !== 200) throw new Error(statusText);

    let data;
    random ? (data = res.data.recipes[0]) : (data = res.data);

    console.log(data);

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

    console.log(recipeInformation);

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

export {
  recipeInformationAction,
  clearRecipeInformation,
  fetchUploadedRecipeAction,
};
