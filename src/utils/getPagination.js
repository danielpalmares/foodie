/**
 * @param array An array of items which will be displayed in the pagination
 * @param currentPage The current pagination's page (number)
 * @param resultsPerPage How many items you want to display in the pagination (number)
 * @returns An spliced array of items
 */
export function getPagination(array, currentPage, resultsPerPage) {
  if (!array) return;

  const start = (currentPage - 1) * resultsPerPage;
  const end = currentPage * resultsPerPage;
  const page = array.slice(start, end);

  return page;
}
