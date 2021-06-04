import axios from 'axios';

const API_KEY = 'e028346c-4d15-4f91-be0d-595d58a497c2';

export const fetchRecipesByName = axios.create({
  baseURL: 'https://forkify-api.herokuapp.com/api/v2/recipes?search=',
  params: {
    key: API_KEY,
  },
});
