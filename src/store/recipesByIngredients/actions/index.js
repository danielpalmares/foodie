import { apiSearchRecipes } from '../../../services/foodie/api';
import {
  FOUND_RECIPES_BY_INGREDIENTS,
  RECIPES_BY_INGREDIENTS_NOT_FOUND,
} from '../types';

export function recipesByIngredientsAction(ingredients) {
  return async dispatch => {
    try {
      const { data } = await apiSearchRecipes(ingredients);

      const recipes = (Array.isArray(data) ? data : []).map(rec => ({
        id: rec.recipe_id,
        title: rec.title,
        image: rec.image?.url || null,
        likes: 0,
      }));

      return dispatch({
        type: FOUND_RECIPES_BY_INGREDIENTS,
        payload: { recipes },
      });
    } catch (err) {
      return dispatch({
        type: RECIPES_BY_INGREDIENTS_NOT_FOUND,
        payload: { status: err },
      });
    }
  };
}
