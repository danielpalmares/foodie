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

import Food from '../assets/category/_index.js';

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
          <ul>
            <li>
              <CategoryCard
                image={Food.bread}
                basedIngredient="🍞 Bread"
                title="Breads, Cereals, Tubers"
                series="carbohydrate"
                handleCategory={evente}
              />
            </li>

            <li>
              <CategoryCard
                image={Food.vegetables}
                basedIngredient="🥦 Vegetable"
                title="Lettuce, Spinach, Cauliflower"
                series="vitamin, mineral, fiber"
                handleCategory={evente}
              />
            </li>

            <li>
              <CategoryCard
                image={Food.fruits}
                basedIngredient="🍎 Fruits"
                title="Apple, Banana, Peach"
                series="fiber, vitamin, mineral"
                handleCategory={evente}
              />
            </li>

            <li>
              <CategoryCard
                image={Food.grains}
                basedIngredient="🌾 Grain"
                title="Bean, Rice, Lentil"
                series="fiber, proteín"
                handleCategory={evente}
              />
            </li>

            <li>
              <CategoryCard
                image={Food.meat}
                basedIngredient="🍖 Meat"
                title="Chicken, Beef, Fish"
                series="proteín"
                handleCategory={evente}
              />
            </li>

            <li>
              <CategoryCard
                image={Food.pizza}
                basedIngredient="🍕 Pizza"
                title="Pepperoni, Mozzarella, Marguerita"
                series="proteín"
                handleCategory={evente}
              />
            </li>

            <li>
              <CategoryCard
                image={Food.pasta}
                basedIngredient="🍝 Pasta"
                title="Spaghetti, Lasagna, Gnocchi"
                series="carbohydrate"
                handleCategory={evente}
              />
            </li>

            <li>
              <CategoryCard
                image={Food.eggs}
                basedIngredient="🥚 Egg"
                title="Chicken egg, Duck egg"
                series="proteín"
                handleCategory={evente}
              />
            </li>

            <li>
              <CategoryCard
                image={Food.milk}
                basedIngredient="🥛 Milk"
                title="Milk and Dairy products"
                series="calcium"
                handleCategory={evente}
              />
            </li>

            <li>
              <CategoryCard
                image={Food.junkFood}
                basedIngredient="🍟 Junk Food"
                title="Fast Food, Candies, Fries"
                series="calorie"
                handleCategory={evente}
              />
            </li>
          </ul>
        </section>
      </main>

      <NavBottom />
    </div>
  );
}
