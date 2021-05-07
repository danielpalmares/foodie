import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Layout from '../pages/Layout';

import starIcon from '../assets/brilhante.svg';

import styles from '../styles/pages/CookingTime.module.scss';

import CategoryCard from '../components/CategoryCard';

import { IoGridOutline, IoArrowForward } from 'react-icons/io5';

import { GlobalContext } from '../contexts/GlobalContextProvider';

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

export default class CookingTime extends Component {
  static contextType = GlobalContext;

  state = {
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

  constructor(props) {
    super(props);

    this.getRecipesByIngredients = this.getRecipesByIngredients.bind(this);
    this.fetchRecipesByIngredients = this.fetchRecipesByIngredients.bind(this);
  }

  greetingByTime() {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 19) {
      return 'Good Afternoon!';
    } else {
      return 'Good Night!';
    }
  }

  async getRecipesByIngredients(e, ingredients) {
    const tagNameTarget = e.target.tagName.toLowerCase();

    if (
      tagNameTarget === 'button' ||
      tagNameTarget === 'svg' ||
      tagNameTarget === 'path'
    )
      return;

    await this.fetchRecipesByIngredients(ingredients);
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
      <Layout hasBackPageBtn={false}>
        <div className={styles.home}>
          <main>
            <h3>{this.greetingByTime()} Adalberto</h3>
            <div className={styles.findRecipesCard}>
              <div className={styles.iconContainer}>
                <img src={starIcon} alt="Stars Icon" />
              </div>

              <div className={styles.textContainer}>
                <p>Find recipes based on what you already have at home</p>
                <Link to="/search">
                  <span>
                    Let's try!
                    <IoArrowForward size={16} />
                  </span>
                </Link>
              </div>
            </div>

            <h3>Are you looking for...</h3>

            <section>
              <CategoryCard
                image="bread.jpg"
                basedIngredient="Bread"
                nutrients="carbohydrate"
                handleClick={e => this.getRecipesByIngredients(e, 'bread')}
              />

              <CategoryCard
                image="milk.jpg"
                basedIngredient="Milk"
                nutrients="calcium"
                handleClick={e => this.getRecipesByIngredients(e, 'milk')}
              />

              <CategoryCard
                image="orange.jpg"
                basedIngredient="Orange"
                nutrients="fiber, vitamin, mineral"
                handleClick={e => this.getRecipesByIngredients(e, 'orange')}
              />

              <CategoryCard
                image="meat.jpg"
                basedIngredient="Meat"
                nutrients="proteín"
                handleClick={e => this.getRecipesByIngredients(e, 'meat')}
              />

              <CategoryCard
                image="pizza.jpg"
                basedIngredient="Pizza"
                nutrients="carbohydrate, proteín"
                handleClick={e => this.getRecipesByIngredients(e, 'pizza')}
              />

              <CategoryCard
                image="pasta.jpg"
                basedIngredient="Pasta"
                nutrients="carbohydrate"
                handleClick={e => this.getRecipesByIngredients(e, 'pasta')}
              />

              <CategoryCard
                image="egg.jpg"
                basedIngredient="Egg"
                nutrients="proteín"
                handleClick={e => this.getRecipesByIngredients(e, 'egg')}
              />
            </section>
          </main>
        </div>
      </Layout>
    );
  }
}
