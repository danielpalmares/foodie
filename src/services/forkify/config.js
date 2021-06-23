export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';
export const API_KEY = 'd5d1c50a-2e5f-4fd8-a0d8-75a38e33ae0e';
export const URL = `${API_URL}?key=${API_KEY}`;
export const TIMEOUT_SECONDS = 3;

/**
 * @param seconds Time in seconds for the promise to happen
 * @returns A reject value from a promise
 */
export function timeout(seconds) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(
        new Error(`Request took too long! Timeout after ${seconds} second`)
      );
    }, seconds * 1000);
  });
}
