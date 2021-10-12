import axios from 'axios';

const apiURL = process.env.REACT_APP_FOODIE_URL;
const token = `Bearer ${sessionStorage.getItem('token')}`;

export const foodieNoAuth = axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const foodie = axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});

export const foodieMulti = axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: token,
  },
});
