import React, { useContext, useEffect } from 'react';
import NavBottom from '../components/NavBottom.jsx';

import { GlobalContext } from '../contexts/GlobalContextProvider';

export default function Search() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Search');
  });

  return (
    <div>
      <h1>Search</h1>
      <NavBottom />
    </div>
  );
}
