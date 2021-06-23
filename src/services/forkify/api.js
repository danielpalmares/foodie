import axios from 'axios';

const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
const API_KEY = 'e028346c-4d15-4f91-be0d-595d58a497c2';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export async function upload(uploadData = undefined) {
  try {
    const options = {
      url: API_URL,
      params: {
        key: API_KEY,
      },
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(uploadData),
    };

    const fetchPro = axios(options);

    const res = await Promise.race([fetchPro, timeout(2.5)]);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);
    return data; //---resolved value returned
  } catch (err) {
    throw err; //---rejected value returned
  }
}
