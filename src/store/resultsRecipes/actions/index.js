import { apiComplexSearch } from '../../../services/spoonacular/api';
import { FOUND_RESULTS, RESULTS_NOT_FOUND } from '../types';

export async function resultsRecipesAction(search) {
  try {
    const response = await apiComplexSearch.get(`complexSearch${search}`);
    const { data, status } = response;

    if (status !== 200) throw new Error(status);

    const recipes = data.results;

    const newRecipes = recipes.map(rec => {
      const instructions = rec.analyzedInstructions.map(ins => {
        return {
          steps: ins.steps.map(stp => {
            return {
              number: stp.number,
              step: stp.step,
            };
          }),
        };
      });

      const ingredients = rec.extendedIngredients.map(ing => {
        return {
          name: ing.originalName,
          amount: ing.amount,
          unit: ing.unit,
        };
      });

      return {
        id: rec.id,
        title: rec.title,
        image: rec.image,
        servings: rec.servings,
        readyInMinutes: rec.readyInMinutes,
        instructions: instructions,
        ingredients: ingredients,
        likes: rec.aggregateLikes,
        dairyFree: rec.dairyFree,
        glutenFree: rec.glutenFree,
        healthScore: rec.healthScore,
      };
    });

    return {
      type: FOUND_RESULTS,
      payload: {
        status: status,
        recipes: newRecipes,
      },
    };
  } catch (err) {
    return {
      type: RESULTS_NOT_FOUND,
      payload: {
        status: err,
        recipes: null,
      },
    };
  }
}
