export function usePagination(array, currentPage, resultsPerPage) {
  const start = (currentPage - 1) * resultsPerPage;
  const end = currentPage * resultsPerPage;
  const page = array.slice(start, end);

  return page;
}
