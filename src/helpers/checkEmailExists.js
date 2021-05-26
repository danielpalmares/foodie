export function checkEmailExists(arr, userEmail) {
  const isEmailAlreadyExists = arr.some(obj => obj.userEmail === userEmail);
  return isEmailAlreadyExists;
}
