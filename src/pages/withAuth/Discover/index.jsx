import React, { Component } from 'react';

import axios from 'axios';

import Layout from '../../../pages/Layout';

import CategoryCard from '../../../components/BasedRecipeCard';

import { DiscoverContainer } from './styles';
import FindRecipesCard from '../../../components/FindRecipesCard';

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

export default class CookingTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomRecipe: {},
      recipesByCategory: [],
    };

    this.getRecipesByIngredients = this.getRecipesByIngredients.bind(this);
    this.fetchRecipesByIngredients = this.fetchRecipesByIngredients.bind(this);
    this._formatDataToState = this._formatDataToState.bind(this);
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

  sendRecipesToContext(recipesArr) {
    const { addRecipesByCategory } = this.context;

    addRecipesByCategory(recipesArr);
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

  async fetchRecipesByIngredients(ingredient) {
    try {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${ingredient}`
      );
      const { data } = response.data;
      const { recipes } = data;

      this._formatDataToState(recipes);

      this.sendRecipesToContext(this.state.recipesByCategory);
    } catch (error) {
      console.log(error);
    }
  }

  _formatDataToState(recArr) {
    const formattedData = [];

    recArr.map(rec => {
      formattedData.push({
        id: rec.id,
        imageUrl: rec.image_url,
        title: rec.title,
      });
    });

    this.setState({
      recipesByCategory: formattedData,
    });
  }

  render() {
    return (
      <Layout>
        <DiscoverContainer>
          <main>
            <h3>{this.greetingByTime()} Adalberto</h3>

            <FindRecipesCard />

            <h3>Are you looking for...</h3>
            <section>
              <CategoryCard
                image="bread.jpg"
                basedIngredient="Bread"
                handleClick={e => this.fetchRecipesByIngredients('bread')}
              />

              <CategoryCard
                image="milk.jpg"
                basedIngredient="Milk"
                handleClick={e => this.getRecipesByIngredients(e, 'milk')}
              />

              <CategoryCard
                image="orange.jpg"
                basedIngredient="Orange"
                handleClick={e => this.getRecipesByIngredients(e, 'orange')}
              />

              <CategoryCard
                image="meat.jpg"
                basedIngredient="Meat"
                handleClick={e => this.getRecipesByIngredients(e, 'meat')}
              />

              <CategoryCard
                image="pizza.jpg"
                basedIngredient="Pizza"
                handleClick={e => this.getRecipesByIngredients(e, 'pizza')}
              />

              <CategoryCard
                image="pasta.jpg"
                basedIngredient="Pasta"
                handleClick={e => this.getRecipesByIngredients(e, 'pasta')}
              />

              <CategoryCard
                image="egg.jpg"
                basedIngredient="Egg"
                handleClick={e => this.getRecipesByIngredients(e, 'egg')}
              />
            </section>
          </main>
        </DiscoverContainer>
      </Layout>
    );
  }
}
