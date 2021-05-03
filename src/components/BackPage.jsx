import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';

import styles from '../styles/components/BackPage.module.scss';

export default function BackPage() {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <div className={styles.buttonContainer}>
      <button onClick={goBack}>
        <IoArrowBackOutline size={26} />
      </button>
    </div>
  );
}
