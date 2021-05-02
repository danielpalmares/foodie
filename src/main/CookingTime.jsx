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

  componentDidMount() {
    const {addActivePage} = this.context;
    addActivePage('Discover')
    
  }

  render() {
    return <Layout />;
  }
}
