export function setItemFromLS(item, data) {
  return localStorage.setItem(item, JSON.stringify(data));
}
