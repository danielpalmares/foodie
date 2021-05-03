import React, { Component } from 'react';
import Layout from '../pages/Layout';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Avatars from '../assets/avatars/index';
import StarsIcon from '../assets/svg/brilhante.svg';

import styles from '../styles/pages/Discover.module.scss';

import CategoryCard from '../components/CategoryCard.jsx';
import Food from '../assets/category/_index.js';

import { IoGridOutline, IoArrowForward } from 'react-icons/io5';

import { GlobalContext } from '../contexts/GlobalContextProvider';

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

export default class CookingTime extends Component {
  static contextType = GlobalContext;

  constructor(props) {
    super(props);

    this.evente = this.evente.bind(this)

    this.state = {
      randomRecipe: {},
      recipesByCategory: {
        breadBased: [],
        vegetableBased: [],
        fruitsBased: [],
        grainBased: [],
        meatBased: [],
        pizzaBased: [],
        pastaBased: [],
        eggBased: [],
        milkBased: [],
        junkFoodBased: [],
      },
    };
  }
  
  evente(e) {
    const tagNameTarget = e.target.tagName.toLowerCase();

    if (
      tagNameTarget === 'button' ||
      tagNameTarget === 'svg' ||
      tagNameTarget === 'path'
    )
      return;
    console.log(tagNameTarget);
  }

  async fetchRecipesByIngredients(ingredients) {
    try {
      const response = axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=87300bc297fe426eaa7da0257a74584f&ingredients=${ingredients}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    const { addActivePage } = this.context;
    addActivePage('Discover');
    //this.fetchRecipesByIngredients('bread');
  }

  render() {
    return (
      <Layout backPage={false}>
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
                title="Breads, Cereals, Tubers"
                series="carbohydrate"
                handleCategory={this.evente}
              />

              <CategoryCard
                image={Food.vegetables}
                basedIngredient="🥦 Vegetable"
                title="Lettuce, Spinach, Cauliflower"
                series="vitamin, mineral, fiber"
                handleCategory={this.evente}
              />

              <CategoryCard
                image={Food.fruits}
                basedIngredient="🍎 Fruits"
                title="Apple, Banana, Peach"
                series="fiber, vitamin, mineral"
                handleCategory={this.evente}
              />

              <CategoryCard
                image={Food.grains}
                basedIngredient="🌾 Grain"
                title="Bean, Rice, Lentil"
                series="fiber, proteín"
                handleCategory={this.evente}
              />

              <CategoryCard
                image={Food.meat}
                basedIngredient="🍖 Meat"
                title="Chicken, Beef, Fish"
                series="proteín"
                handleCategory={this.evente}
              />

              <CategoryCard
                image={Food.pizza}
                basedIngredient="🍕 Pizza"
                title="Pepperoni, Mozzarella, Marguerita"
                series="proteín"
                handleCategory={this.evente}
              />

              <CategoryCard
                image={Food.pasta}
                basedIngredient="🍝 Pasta"
                title="Spaghetti, Lasagna, Gnocchi"
                series="carbohydrate"
                handleCategory={this.evente}
              />

              <CategoryCard
                image={Food.eggs}
                basedIngredient="🥚 Egg"
                title="Chicken egg, Duck egg"
                series="proteín"
                handleCategory={this.evente}
              />

              <CategoryCard
                image={Food.milk}
                basedIngredient="🥛 Milk"
                title="Milk and Dairy products"
                series="calcium"
                handleCategory={this.evente}
              />

              <CategoryCard
                image={Food.junkFood}
                basedIngredient="🍟 Junk Food"
                title="Fast Food, Candies, Fries"
                series="calorie"
                handleCategory={this.evente}
              />
            </section>
          </main>
        </div>
      </Layout>
    );
  }
}
