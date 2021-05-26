export function getItemFromLS(item) {
  const itemFromLS = localStorage.getItem(item);
  const itemFromLSParsed = JSON.parse(itemFromLS);
  const itemData = itemFromLSParsed === null ? [] : itemFromLSParsed;

  return itemData;
}
