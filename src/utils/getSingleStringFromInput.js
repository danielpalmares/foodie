/**
 * @param string A unformatted string from a input
 * @returns The string formatted
 */
export function getSingleStringFromInput(string) {
  const formattedString = string.replace(/\s+/g, ' ').trim().replace(' ', '+');

  return formattedString;
}
