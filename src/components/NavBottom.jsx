import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContextProvider';
import { Link } from 'react-router-dom';
import {
  IoCompassOutline,
  IoSearchOutline,
  IoAddCircleOutline,
  IoHeartOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import styles from '../styles/components/navBottom.module.scss';

export default function NavBottom() {
  const { activePage } = useContext(GlobalContext);
  const buttonActive = styles.buttonActive;

  return (
    <nav className={styles.navBottom}>
      <Link to="/">
        <button className={activePage === 'Discover' ? buttonActive : ''}>
          <IoCompassOutline size={26} />
        </button>
      </Link>

      <Link to="/search">
        <button className={activePage === 'Search' ? buttonActive : ''}>
          <IoSearchOutline size={26} />
        </button>
      </Link>

      <Link to="/upload">
        <button className={activePage === 'Upload' ? buttonActive : ''}>
          <IoAddCircleOutline size={26} />
        </button>
      </Link>

      <Link to="/favorites">
        <button className={activePage === 'Favorites' ? buttonActive : ''}>
          <IoHeartOutline size={26} />
        </button>
      </Link>

      <Link to="/profile">
        <button className={activePage === 'Profile' ? buttonActive : ''}>
          <IoPersonOutline size={26} />
        </button>
      </Link>
    </nav>
  );
}
