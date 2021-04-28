import React from 'react';
import {
  IoCompassOutline,
  IoSearchOutline,
  IoAddCircleOutline,
  IoHeartOutline,
  IoPersonOutline,
} from 'react-icons/io5';

import styles from '../styles/components/NavBottom.module.scss';

export default function NavBottom() {
  return (
    <nav className={styles.navBottom}>
      <button className={styles.buttonActive}>
        <IoCompassOutline size={26} />
      </button>
      <button>
        <IoSearchOutline size={26} />
      </button>
      <button>
        <IoAddCircleOutline size={26} />
      </button>
      <button>
        <IoHeartOutline size={26} />
      </button>
      <button>
        <IoPersonOutline size={26} />
      </button>
    </nav>
  );
}
