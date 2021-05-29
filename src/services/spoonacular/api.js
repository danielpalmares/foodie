import axios from 'axios';

const API_KEY = 'ce9ca7ccb5154bcfa3dfda280afcdd30';

export const api = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/`,
  params: {
    apiKey: API_KEY,
  },
});
