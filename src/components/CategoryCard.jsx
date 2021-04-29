import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';

import styles from '../styles/components/categoryCard.module.scss';

export default function CategoryCard({
  image,
  basedIngredient,
  title,
  series,
  handleCategory,
}) {
  console.log(image);

  return (
    <div
      className={styles.recipeContainer}
      style={{
        backgroundImage: `url(${image})`,
      }}
      onClick={handleCategory}
    >
      <div className={styles.top}>
        <span>{basedIngredient} Based</span>

        <button>
          <IoHeartOutline size={26} />
        </button>
      </div>

      <div className={styles.bottom}>
        <h3>{title}</h3>
        <span>
          <strong>{series}</strong> series
        </span>
      </div>
    </div>
  );
}
