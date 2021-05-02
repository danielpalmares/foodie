import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalContextProvider';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import styles from '../styles/pages/Upload.module.scss';

import NavBottom from '../components/Navigation.jsx';

export default function Upload() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Upload');
  });

  return (
    <div className={styles.upload}>
      <div className={styles.buttonContainer}>
        <Link to="/">
          <button>
            <IoArrowBackOutline size={26} />
          </button>
        </Link>
      </div>

      <header>

        <h1>Upload</h1>


      </header>

      <main>

      </main>
      <NavBottom />
    </div>

  );
}
