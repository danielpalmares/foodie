import api from '../../services/spoonacular/api';

const FOUND_RECIPES = 'FOUND_RECIPES';
const RECIPES_NOT_FOUND = 'RECIPES_NOT_FOUND';

export async function recipesByIngredientsAction(ingredients) {
  try {
    const res = await api.get(`findByIngredients?ingredients=${ingredients}`);
    const { results } = res.data;
    const { totalResults } = res.data;

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

    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

const initialState = {};

export function recipesByIngredientsReducer(state, action) {}
