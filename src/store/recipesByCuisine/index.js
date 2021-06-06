import { apiComplexSearch } from '../../services/spoonacular/api';

const FOUND_RECIPES_BY_CUISINE = 'FOUND_RECIPES_BY_CUISINE';
const RECIPES_BY_CUISINE_NOT_FOUND = 'RECIPES_BY_CUISINE_NOT_FOUND';

export async function recipesByCuisineAction(cuisine) {
  try {
    const response = await apiComplexSearch.get(`?cuisine=${cuisine}`);
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
      type: FOUND_RECIPES_BY_CUISINE,
      payload: {
        status: status,
        recipes: newRecipes,
      },
    };
  } catch (err) {
    return {
      type: RECIPES_BY_CUISINE_NOT_FOUND,
      payload: {
        status: err,
        recipes: null,
      },
    };
  }
}

const initialState = {
  status: null,
  data: null,
};

export function recipesByCuisine(state = initialState, action) {
  switch (action.type) {
    case FOUND_RECIPES_BY_CUISINE:
      return {
        ...state,
        data: action.payload.recipes,
        status: action.payload.status,
      };
    case RECIPES_BY_CUISINE_NOT_FOUND:
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
