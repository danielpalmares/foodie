export function getPagination(array, currentPage, resultsPerPage) {
  if (!array) return;

  const start = (currentPage - 1) * resultsPerPage;
  const end = currentPage * resultsPerPage;
  const page = array.slice(start, end);

  return page;
}
