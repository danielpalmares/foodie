import React from 'react';
import { IoGridOutline } from 'react-icons/io5';

import Avatars from '../assets/avatars/index';
import styles from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <header>
        <button>
          <IoGridOutline size={26} color="#050908" />
        </button>

        <div className={styles.user}>
          <img src={Avatars.ladyAvatar1} alt="User Profile" />
        </div>
      </header>
    </div>
  );
}
