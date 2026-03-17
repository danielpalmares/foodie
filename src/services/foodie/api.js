import axios from 'axios';

const BASE_URL = process.env.REACT_APP_FOODIE_API_URL || 'http://localhost:7070';

function getToken() {
  return localStorage.getItem('foodie_token');
}

const foodieApi = axios.create({ baseURL: BASE_URL });

foodieApi.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth
export const apiSignIn = data =>
  axios.post(`${BASE_URL}/authenticate`, data);

export const apiCreateUser = data =>
  axios.post(`${BASE_URL}/user`, data);

export const apiGetUser = username =>
  foodieApi.get(`/user/${username}`);

export const apiUpdateUser = (id, data) =>
  foodieApi.put(`/user/${id}`, data);

// Recipes
export const apiCreateRecipe = data =>
  foodieApi.post('/recipe', data);

export const apiDeleteRecipe = id =>
  foodieApi.delete(`/recipe/${id}`);

export const apiGetAllRecipes = () =>
  foodieApi.get('/recipes');

export const apiGetUserRecipes = userId =>
  foodieApi.get(`/recipes/${userId}`);

export const apiGetOneRecipe = id =>
  foodieApi.get(`/recipe/${id}`);

// Friendships
export const apiSendFriendRequest = data =>
  foodieApi.post('/friendRequest', data);

export const apiGetFriendRequests = userId =>
  foodieApi.get(`/friendRequests/${userId}`);

export const apiAcceptFriend = requestId =>
  foodieApi.post(`/friendship/${requestId}`);

export const apiRejectFriend = requestId =>
  foodieApi.delete(`/friendRequest/${requestId}`);

export const apiGetFriendsList = userId =>
  foodieApi.get(`/friendsList/${userId}`);

export const apiRemoveFriend = id =>
  foodieApi.delete(`/friend/${id}`);

export const apiGetUploadsUrl = () => `${BASE_URL}/uploads`;

// Search
export const apiSearchRecipes = query =>
  foodieApi.get(`/recipes/search?query=${encodeURIComponent(query)}`);
