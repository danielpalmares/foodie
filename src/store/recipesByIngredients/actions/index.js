import { apiFindByIngredients } from '../../../services/spoonacular/api';
import {
  FOUND_RECIPES_BY_INGREDIENTS,
  RECIPES_BY_INGREDIENTS_NOT_FOUND,
} from '../types';

export async function recipesByIngredientsAction(ingredients) {
  try {
    const res = await apiFindByIngredients.get(`?ingredients=${ingredients}`);
    const { data, status, statusText } = res;

    if (status !== 200) throw new Error(statusText);

    const recipes = data.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        image: rec.image,
        likes: rec.likes,
      };
    });

    return {
      type: FOUND_RECIPES_BY_INGREDIENTS,
      payload: {
        recipes: recipes,
      },
    };
  } catch (err) {
    return {
      type: RECIPES_BY_INGREDIENTS_NOT_FOUND,
      payload: {
        status: err,
      },
    };
  }
}
