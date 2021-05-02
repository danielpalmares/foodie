import React, { Component } from 'react';
import Layout from '../pages/Layout';
import axios from 'axios';

import {GlobalContext} from '../contexts/GlobalContextProvider';

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;


export default class CookingTime extends Component {
  static contextType = GlobalContext;

  constructor(props) {
    super(props);

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

  async fetchRecipesByIngredients(ingredients) {
    try {
      const response = axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=87300bc297fe426eaa7da0257a74584f&ingredients=${ingredients}`);
      console.log(response)
    } catch(error) {
      console.log(error)
    }
  }

  componentDidMount() {
    const {addActivePage} = this.context;
    addActivePage('Discover')
    this.fetchRecipesByIngredients('bread');
  }

  render() {
    return <Layout />;
  }
}
