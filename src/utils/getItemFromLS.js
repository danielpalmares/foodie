/**
 * @param item A string pointing to a localStorage item
 * @returns The item or an empty array if there is no item
 */
export function getItemFromLS(item) {
  const itemFromLS = localStorage.getItem(item);
  const itemFromLSParsed = JSON.parse(itemFromLS);
  const itemData = itemFromLSParsed === null ? [] : itemFromLSParsed;
  return itemData;
}
