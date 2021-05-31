import axios from 'axios';

const API_KEY = 'ce9ca7ccb5154bcfa3dfda280afcdd30';

export const apiFindByIngredients = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/findByIngredients`,
  params: {
    apiKey: API_KEY,
    number: 20, // results per request
  },
});
