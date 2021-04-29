import React, { useContext, useEffect } from 'react';
import { IoGridOutline, IoArrowForward, IoHeartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import NavBottom from '../components/NavBottom.jsx';

import Avatars from '../assets/avatars/index';
import StarsIcon from '../assets/svg/brilhante.svg';

import styles from '../styles/pages/discover.module.scss';
import { GlobalContext } from '../contexts/GlobalContextProvider.jsx';

export default function Discover() {
  const { addActivePage } = useContext(GlobalContext);
  const img =
    'https://images.absolutdrinks.com/ingredient-images/Raw/Absolut/0f1cdf6d-950a-42d5-8843-c00a6248b87b.jpg?imwidth=500';
  useEffect(() => {
    return addActivePage('Discover');
  });

  return (
    <div className={styles.home}>
      <header>
        <button>
          <IoGridOutline size={26} />
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
            <Link to="/search">
              <button>
                Let's try!
                <IoArrowForward size={16} />
              </button>
            </Link>
          </div>
        </div>

        <section>
          <div
            className={styles.recipeContainer}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img})`,
            }}
          >
            <div className={styles.top}>
              <span>Orange based</span>

              <button>
                <IoHeartOutline size={26} />
              </button>
            </div>

            <div className={styles.bottom}>
              <span>Recipe name</span>
            </div>
          </div>
        </section>
      </main>

      <NavBottom />
    </div>
  );
}
