import React, { useContext, useEffect } from 'react';
import NavBottom from '../components/NavBottom.jsx';
import { IoArrowBackOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../contexts/GlobalContextProvider';
import styles from '../styles/pages/Profile.module.scss';

export default function Profile() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Profile');
  });

  return (
    <div className={styles.profile}>
      <div className={styles.buttonContainer}>
        <Link to="/">
          <button>
            <IoArrowBackOutline size={26} />
          </button>
        </Link>
      </div>
      <header>
        <h1>Profile</h1>
      </header>
      <NavBottom />

      
    </div>
  );
}
