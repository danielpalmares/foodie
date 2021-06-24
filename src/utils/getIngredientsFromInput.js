/**
 * @param string A unformatted string full of recipes separated by comma
 * @description Example: 'Apple, Potato, Green Apple'
 * @returns The formatted string
 */
export function getIngredientsFromInput(string) {
  // check the whole string, replace double whitespace or more for one, and then split them by comma into an array
  const ingredientsArr = string.replace(/\s+/g, ' ').split(',');
  // for each ingredient inside the array, remove whitespace from start and end, for others just replace for +
  const ingredientsArrFormatted = ingredientsArr.map(ing =>
    ing.trim().replace(' ', '+').toLowerCase()
  );
  // transform them back to string separated by comma
  const ingredientsFormatted = ingredientsArrFormatted.join(',');

  return ingredientsFormatted;
}
