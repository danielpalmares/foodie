export function getSingleStringFromInput(string) {
  const formattedString = string.replace(/\s+/g, ' ').trim().replace(' ', '+');

  return formattedString;
}
