/**
 * @param {*} item A string pointing to a localStorage item
 * @param {*} data The modified item data
 * @description This method is usually used together with getItemFromLS()
 * @returns Set the localStorage item
 */
export function setItemFromLS(item, data) {
  return localStorage.setItem(item, JSON.stringify(data));
}
