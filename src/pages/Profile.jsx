import React, { useContext, useEffect } from 'react';
import NavBottom from '../components/NavBottom.jsx';

import { GlobalContext } from '../contexts/GlobalContextProvider';

export default function Profile() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Profile');
  });

  return (
    <div>
      <h1>Profile</h1>
      <NavBottom />
    </div>
  );
}
