import { apiSearchRecipes } from '../../../services/foodie/api';
import {
  FOUND_RESULTS,
  RESULTS_NOT_FOUND,
  CLEAR_RESULTS_RECIPES,
} from '../types';

export function clearResultsRecipesAction() {
  return {
    type: CLEAR_RESULTS_RECIPES,
    payload: { recipes: null },
  };
}

export function resultsRecipesAction(search) {
  return async dispatch => {
    try {
      // Extract query from search string like "?query=pizza" or "?type=dessert"
      const params = new URLSearchParams(search);
      const query = params.get('query') || params.get('type') || params.get('cuisine') || params.get('maxReadyTime') || '';

      const { data } = await apiSearchRecipes(query);

      const recipes = (Array.isArray(data) ? data : []).map(rec => ({
        id: rec.recipe_id,
        title: rec.title,
        image: rec.image?.url || null,
        servings: rec.servings,
        readyInMinutes: rec.ready_in_minutes,
        ingredients: rec.ingredients || [],
        instructions: rec.instructions || [],
        likes: 0,
      }));

      return dispatch({
        type: FOUND_RESULTS,
        payload: { status: 200, recipes },
      });
    } catch (err) {
      return dispatch({
        type: RESULTS_NOT_FOUND,
        payload: { status: err, recipes: null },
      });
    }
  };
}
