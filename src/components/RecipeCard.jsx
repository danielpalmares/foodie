import React from 'react';

import { IoArrowForwardOutline, IoTimerOutline } from 'react-icons/io5';
import styles from '../styles/components/RecipeCard.module.scss';

export default function RecipeCard({
  title,
  cookingTime,
  imageSrc,
  handleRecipe,
}) {
  const gradient = 'linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4))';

  return (
    <>
      <div
        className={styles.RecipeCard}
        style={{
          backgroundImage: `${gradient},url(${imageSrc})`,
        }}
        onClick={handleRecipe}
      >
        <div>
          <span className={styles.directions}>
            How to make <IoArrowForwardOutline size={14} />
          </span>
          <h3>{title}</h3>
          <span className={styles.timer}>
            <IoTimerOutline size={14} /> {cookingTime} min
          </span>
        </div>
      </div>
    </>
  );
}
