import { apiFindVideos } from '../../services/spoonacular/api';

const RECIPE_VIDEOS_FOUND = 'RECIPE_VIDEOS_FOUND';
const RECIPE_VIDEOS_NOT_FOUND = 'RECIPE_VIDEOS_NOT_FOUND';

export async function recipeVideosAction(query) {
  try {
    const response = await apiFindVideos.get(`?query=${query}`);
    const { status, data } = response;
    const { totalResults, videos } = data;

    if (status !== 200) throw new Error('Videos not found');

    const recipeVideos = videos.map(vid => {
      return {
        shortTitle: vid.shortTitle,
        thumbnail: vid.thumbnail,
        views: vid.views,
        duration: {
          minutes: parseInt((vid.length % 3600) / 60),
          seconds: parseInt((vid.length % 3600) % 60),
        },
        rating: vid.rating,
        id: vid.youTubeId,
      };
    });

    return {
      type: RECIPE_VIDEOS_FOUND,
      payload: {
        totalResults: totalResults,
        recipeVideos: recipeVideos,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      type: RECIPE_VIDEOS_NOT_FOUND,
      payload: {
        error: err,
      },
    };
  }
}

const initialState = {
  errorMessage: '',
  totalResults: 0,
  videos: [],
};

export function recipeVideos(state = initialState, action) {
  switch (action.type) {
    case RECIPE_VIDEOS_FOUND:
      return {
        ...state,
        totalResults: action.payload.totalResults,
        videos: action.payload.recipeVideos,
      };
    case RECIPE_VIDEOS_NOT_FOUND:
      return {
        ...state,
        errorMessage: action.payload.error,
      };
    default:
      return state;
  }
}
