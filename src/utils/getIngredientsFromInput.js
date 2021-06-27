/**
 * @param string A unformatted string full of recipes separated by comma
 * @description Example: 'Apple, Potato, Green Apple'
 * @returns The formatted string
 */
export function getIngredientsFromInput(string) {
  const ingredientsArr = string.replace(/\s+/g, ' ').split(',');
  const ingredientsArrFormatted = ingredientsArr.map(ing =>
    ing.trim().replace(' ', '+').toLowerCase()
  );

  const ingredientsFormatted = ingredientsArrFormatted.join(',');
  return ingredientsFormatted;
}
