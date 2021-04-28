import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalContextProvider';
import { IoArrowBackOutline } from 'react-icons/io5';

import NavBottom from '../components/NavBottom.jsx';

import styles from '../styles/pages/search.module.scss';

export default function Search() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Search');
  });

  return (
    <div className={styles.search}>
      <div className={styles.buttonContainer}>
        <button>
          <IoArrowBackOutline size={26} />
        </button>
      </div>

      <header>
        <h1>What's in your kitchen?</h1>
        <span>Enter up to 2 ingredients or more</span>

        <input type="text" placeholder="Type and add your ingredients..." />
      </header>

      <NavBottom />
    </div>
  );
}
