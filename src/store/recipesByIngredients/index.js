import { apiFindByIngredients } from '../../services/spoonacular/api';

const FOUND_RECIPES = 'FOUND_RECIPES';
const RECIPES_NOT_FOUND = 'RECIPES_NOT_FOUND';

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
      type: FOUND_RECIPES,
      payload: {
        status: statusText,
        recipes: recipes,
      },
    };
  } catch (err) {
    return {
      type: RECIPES_NOT_FOUND,
      payload: {
        status: err,
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
