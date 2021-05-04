import React from 'react';

import { IoHeartOutline } from 'react-icons/io5';
import styles from '../styles/components/CategoryCard.module.scss';

export default function CategoryCard({
  image,
  basedIngredient,
  title,
  nutrients,
  handleClick,
}) {
  return (
    <div
      className={styles.categoryCard}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + 'images/' + image})`,
      }}
      onClick={handleClick}
    >
      <div className={styles.top}>
        <span>{basedIngredient}?</span>

        <button>
          <IoHeartOutline size={26} />
        </button>
      </div>

      <div className={styles.bottom}>
        {title && <h3>{title}</h3>}
        {nutrients && <span>{nutrients}</span>}
      </div>
    </div>
  );
}
