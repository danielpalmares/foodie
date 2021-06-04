import { fetchRecipesByName } from '../../services/forkify/api';

const FOUND_RECIPES_BY_NAME = 'FOUND_RECIPES_BY_NAME';
const RECIPES_BY_NAME_NOT_FOUND = 'RECIPES_BY_NAME_NOT_FOUND';

async function recipesByNameAction(recipe) {
  try {
    const response = await fetchRecipesByName.get(`${recipe}`);
    const { status, results, data } = response;
    const { recipes } = data;

    if (status !== 'success') throw new Error(status);

    const newRecipes = recipes.map(rec => {
      return {
        publisher: rec.publisher,
        image: rec.image_url,
        title: rec.title,
        id: rec.id,
      };
    });

    return {
      type: FOUND_RECIPES_BY_NAME,
      payload: {
        status: status,
        results: results,
        data: newRecipes,
      },
    };
  } catch (err) {
    return {
      type: RECIPES_BY_NAME_NOT_FOUND,
      payload: {
        status: err,
        results: null,
        data: null,
      },
    };
  }
}

const initialState = {
  data: null,
};

export function recipesByName(state = initialState, action) {
  switch (action.type) {
    case FOUND_RECIPES_BY_NAME:
      return {
        ...state,
        data: action.payload,
      };
    case RECIPES_BY_NAME_NOT_FOUND:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
