import React, { useContext, useEffect } from 'react';
import {
  IoGridOutline,
  IoArrowForward,
  IoHeartOutline,
  IoReturnUpForwardSharp,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import NavBottom from '../components/NavBottom.jsx';

import Avatars from '../assets/avatars/index';
import StarsIcon from '../assets/svg/brilhante.svg';

import styles from '../styles/pages/discover.module.scss';
import { GlobalContext } from '../contexts/GlobalContextProvider.jsx';
import CategoryCard from '../components/CategoryCard.jsx';

import Food from '../assets/category/index.js';

export default function Discover() {
  const { addActivePage } = useContext(GlobalContext);
  const img =
    'https://images.absolutdrinks.com/ingredient-images/Raw/Absolut/0f1cdf6d-950a-42d5-8843-c00a6248b87b.jpg?imwidth=500';
  useEffect(() => {
    return addActivePage('Discover');
  });

  function evente(e) {
    const tagNameTarget = e.target.tagName.toLowerCase();

    if (
      tagNameTarget === 'button' ||
      tagNameTarget === 'svg' ||
      tagNameTarget === 'path'
    )
      return;
    console.log(tagNameTarget);
  }

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
          <CategoryCard
            image={Food.bread}
            basedIngredient="🍞 Bread"
            title="Breads, Cereals, and Tubers"
            recipeQuantity="carbohydrate"
            handleCategory={evente}
          />

          <CategoryCard
            image={Food.vegetables}
            basedIngredient="🥦 Vegetable" 
            title="Vitamins, Minerals and Fibers"
            recipeQuantity="vegetable"
            handleCategory={evente}
          />

          <CategoryCard
            image={Food.bread}
            basedIngredient="🍞 Bread"
            title="Hey"
            recipeQuantity={40}
            handleCategory={evente}
          />

          <CategoryCard
            image={Food.bread}
            basedIngredient="🍞 Bread"
            title="Hey"
            recipeQuantity={40}
            handleCategory={evente}
          />

          <CategoryCard
            image={Food.bread}
            basedIngredient="🍞 Bread"
            title="Hey"
            recipeQuantity={40}
            handleCategory={evente}
          />

          <CategoryCard
            image={Food.bread}
            basedIngredient="🍞 Bread"
            title="Hey"
            recipeQuantity={40}
            handleCategory={evente}
          />

          <CategoryCard
            image={Food.bread}
            basedIngredient="🍞 Bread"
            title="Hey"
            recipeQuantity={40}
            handleCategory={evente}
          />

          <CategoryCard
            image={Food.bread}
            basedIngredient="🍞 Bread"
            title="Hey"
            recipeQuantity={40}
            handleCategory={evente}
          />

          <CategoryCard
            image={Food.bread}
            basedIngredient="🍞 Bread"
            title="Hey"
            recipeQuantity={40}
            handleCategory={evente}
          />

          <CategoryCard
            image={Food.bread}
            basedIngredient="🍞 Bread"
            title="Hey"
            recipeQuantity={40}
            handleCategory={evente}
          />

          <CategoryCard
            image={Food.bread}
            basedIngredient="🍞 Bread"
            title="Hey"
            recipeQuantity={40}
            handleCategory={evente}
          />

          <CategoryCard
            image={Food.bread}
            basedIngredient="🍞 Bread"
            title="Hey"
            recipeQuantity={40}
            handleCategory={evente}
          />
        </section>
      </main>

      <NavBottom />
    </div>
  );
}
