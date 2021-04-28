import React, { useContext, useEffect } from 'react';
import NavBottom from '../components/NavBottom.jsx';

import { GlobalContext } from '../contexts/GlobalContextProvider';

export default function Favorites() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Favorites');
  });

  return (
    <div>
      <h1>Favorites</h1>
      <NavBottom />
    </div>
  );
}
