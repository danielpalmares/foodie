import React from 'react';
import { IoGridOutline, IoArrowForward } from 'react-icons/io5';

import Avatars from '../assets/avatars/index';
import StarsIcon from '../assets/svg/brilhante.svg';

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

      <main>
        <div className={styles.findRecipesCard}>
          <div className={styles.iconContainer}>
            <img src={StarsIcon} alt="Stars Icon" />
          </div>

          <div className={styles.textContainer}>
            <p>Find recipes based on what you already have at home</p>
            <button>
              Let's try!
              <IoArrowForward size={16} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
