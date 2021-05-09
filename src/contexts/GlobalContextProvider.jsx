import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [activePage, setActivePage] = useState('');
  const [recipesByCategory, setRecipesByCategory] = useState([]);

  const addActivePage = (page) => setActivePage(page);

  const addRecipesByCategory = (recArr) => setRecipesByCategory(recArr);

  return (
    <GlobalContext.Provider
      value={{
        activePage,
        addActivePage,
        recipesByCategory,
        addRecipesByCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
