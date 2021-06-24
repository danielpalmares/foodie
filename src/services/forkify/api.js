import axios from 'axios';
import {
  UPLOAD_URL,
  API_URL,
  API_KEY,
  TIMEOUT_SECONDS,
  timeout,
} from './config';

/**
 * @param uploadData The recipe data as an object
 * @returns The resolved or reject value
 * @implements Axios instead of the fetch method
 */
export async function apiUpload(uploadData) {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(uploadData),
    };

    const fetchPro = uploadData
      ? fetch(UPLOAD_URL, options)
      : fetch(UPLOAD_URL);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);
    const data = await res.json();

    // if any error occurs then return it
    if (!res.ok) throw new Error(data.message);

    // return resolved value
    return data;
  } catch (err) {
    // return rejected value
    throw err;
  }
}

export const apiFetchUploadedRecipe = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
});
