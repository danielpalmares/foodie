import axios from 'axios';

const API_KEY = 'ce9ca7ccb5154bcfa3dfda280afcdd30';

const baseURL = 'https://api.spoonacular.com/recipes/';

export const apiFindByIngredients = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/findByIngredients`,
  params: {
    apiKey: API_KEY,
    number: 50, // recipes per request
  },
});

export const apiGetRecipeInformation = axios.create({
  baseURL: baseURL,
  params: {
    apiKey: API_KEY,
  },
});

export const apiComplexSearch = axios.create({
  baseURL: baseURL, // query
  params: {
    apiKey: API_KEY,
    addRecipeInformation: true,
    instructionsRequired: true,
    fillIngredients: true,
    number: 50, // recipes per request
  },
});

export const apiFindByID = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/{id}/information`, // id/information
  params: {
    apiKey: API_KEY,
  },
});

export const apiGetRandom = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/random`,
  params: {
    apiKey: API_KEY,
    number: 1, // random recipes per request
  },
});

export const apiFindVideos = axios.create({
  baseURL: `https://api.spoonacular.com/food/videos/search`, // ?query
  params: {
    apiKey: API_KEY,
    number: 50, // videos per request
  },
});
