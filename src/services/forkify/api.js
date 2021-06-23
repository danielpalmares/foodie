import { URL, TIMEOUT_SECONDS, timeout } from './config';

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

    const fetchPro = uploadData ? fetch(URL, options) : fetch(URL);

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
