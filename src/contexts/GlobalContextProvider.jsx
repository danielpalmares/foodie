import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [activePage, setActivePage] = useState('');

  function addActivePage(page) {
    return setActivePage(page);
  }

  return (
    <GlobalContext.Provider
      value={{
        activePage,
        addActivePage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
