import axios from 'axios';

const API_KEY = 'ce9ca7ccb5154bcfa3dfda280afcdd30';

const api = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/complexSearch`,
  params: {
    apiKey: API_KEY,
    addRecipeInformation: true, // more information and detail of the recipe
    instructionsRequired: true, // instructions about the recipe
    fillIngredients: true, // information about the ingredients
    number: 20, // results per request
  },
});

export default api;
