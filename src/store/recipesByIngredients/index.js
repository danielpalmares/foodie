import api from '../../services/spoonacular/api';

const FOUND_RECIPES = 'FOUND_RECIPES';
const RECIPES_NOT_FOUND = 'RECIPES_NOT_FOUND';

export async function recipesByIngredientsAction(ingredients) {
  try {
    const res = await api.get(`findByIngredients?ingredients=${ingredients}`);
    const { status, statusText } = res;

    if (status !== 200) throw new Error(statusText);

    const { totalResults } = res.data;
    const { results } = res.data;

    const recipes = results.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        image: rec.image,
        ingredients: rec.extendedIngredients.map(ing => {
          return {
            name: ing.originalName,
            unit: ing.unitShort,
            amount: ing.amount,
          };
        }),
        instructions: rec.analyzedInstructions.map(ins =>
          ins.steps.map(stp => {
            return {
              number: stp.number,
              step: stp.step,
            };
          })
        ),
        servings: rec.servings,
        readyInMinutes: rec.readyInMinutes,

        veryPopular: rec.veryPopular,
        veryHealthy: rec.veryHealthy,
        healthScore: rec.healthScore,
        likes: rec.aggregateLikes,
        dairyFree: rec.dairyFree,
        glutenFree: rec.glutenFree,
      };
    });

    return {
      type: FOUND_RECIPES,
      payload: {
        status: statusText,
        totalResults: totalResults,
        recipes: recipes,
      },
    };
  } catch (err) {
    return {
      type: RECIPES_NOT_FOUND,
      payload: {
        status: err,
        totalResults: null,
        recipes: null,
      },
    };
  }
}

const initialState = {
  data: null,
};

export function recipesByIngredientsReducer(state = initialState, action) {
  switch (action.type) {
    case FOUND_RECIPES:
      return {
        ...state,
        data: action.payload,
      };
    case RECIPES_NOT_FOUND:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
