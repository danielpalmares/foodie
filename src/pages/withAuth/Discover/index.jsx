import React, { Component } from 'react';
import axios from 'axios';

import Layout from '../../../pages/Layout';

import BasedRecipeCard from '../../../components/BasedRecipeCard';

import { DiscoverContainer, DrinkList } from './styles';
import FindRecipesCard from '../../../components/FindRecipesCard';

import AppTitle from '../../../components/AppTitle';

const APIKEY = 'ce9ca7ccb5154bcfa3dfda280afcdd30';

export default class Discover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomRecipe: {},
      recipesByCategory: [],
    };
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

  render() {
    return (
      <Layout defaultHeader>
        <DiscoverContainer>
          <main>
            <AppTitle>{this.greetingByTime()} Adalberto</AppTitle>
            <FindRecipesCard />

            <section>
              <AppTitle>Up to drink something?</AppTitle>
              <DrinkList>
                <li>
                  <button>Wine</button>
                </li>
                <li>
                  <button>Vodka</button>
                </li>
                <li>
                  <button>Whiskey</button>
                </li>
                <li>
                  <button>Rum</button>
                </li>
                <li>
                  <button>Tea</button>
                </li>
                <li>
                  <button>Coffee</button>
                </li>
                <li>
                  <button>Apple juice</button>
                </li>
              </DrinkList>
            </section>

            <section>
              <AppTitle>Usual ingredients based recipes</AppTitle>

              <BasedRecipeCard
                image="bread.jpg"
                basedIngredient="Bread"
                handleClick={e => this.fetchRecipesByIngredients(e, 'bread')}
              />

              <BasedRecipeCard
                image="milk.jpg"
                basedIngredient="Milk"
                handleClick={e => this.getRecipesByIngredients(e, 'milk')}
              />

              <BasedRecipeCard
                image="orange.jpg"
                basedIngredient="Orange"
                handleClick={e => this.getRecipesByIngredients(e, 'orange')}
              />

              <BasedRecipeCard
                image="meat.jpg"
                basedIngredient="Meat"
                handleClick={e => this.getRecipesByIngredients(e, 'meat')}
              />

              <BasedRecipeCard
                image="pizza.jpg"
                basedIngredient="Pizza"
                handleClick={e => this.getRecipesByIngredients(e, 'pizza')}
              />

              <BasedRecipeCard
                image="pasta.jpg"
                basedIngredient="Pasta"
                handleClick={e => this.getRecipesByIngredients(e, 'pasta')}
              />

              <BasedRecipeCard
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
