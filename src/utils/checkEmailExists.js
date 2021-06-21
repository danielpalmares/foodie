export function checkEmailExists(arr, userEmail) {
  const isEmailAlreadyExists = arr.some(obj => obj.email === userEmail);
  return isEmailAlreadyExists;
}
