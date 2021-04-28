import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalContextProvider';

import NavBottom from '../components/NavBottom.jsx';

export default function Upload() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Upload');
  });

  return (
    <div>
      <h1>Upload</h1>
      <NavBottom />
    </div>
  );
}
