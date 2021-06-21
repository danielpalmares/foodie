export function checkUsernameExists(arr, username) {
  const isUsernameAlreadyExists = arr.some(obj => obj.username === username);
  return isUsernameAlreadyExists;
}
