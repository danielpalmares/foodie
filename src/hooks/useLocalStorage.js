export function useLocalStorage(config = {}, setData) {
  if (config.get) {
    const itemFromLS = localStorage.getItem(config.item);
    const itemFromLSParsed = JSON.parse(itemFromLS);
    const itemData = itemFromLSParsed === null ? [] : itemFromLSParsed;

    return [itemData];
  }

  if (config.set) {
    return localStorage.setItem(config.item, JSON.stringify(setData));
  }
}
