import React, { useContext, useEffect } from 'react';
import NavBottom from '../components/Navigation.jsx';
import { IoArrowBackOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../contexts/GlobalContextProvider';
import styles from '../styles/pages/Favorites.module.scss';

export default function Favorites() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Favorites');
  });

  return (
    <div className={styles.favorites}>
      <div className={styles.buttonContainer}>
        <Link to="/">
          <button>
            <IoArrowBackOutline size={26} />
          </button>
        </Link>
        </div>

      <header>
      <h1>Favorites</h1>
      </header>
      <NavBottom />
    </div>
  );
}
