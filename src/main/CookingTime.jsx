import React, { Component } from 'react';

export default class CookingTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  componentDidMount() {}

  render() {
    return <h1>Hello world</h1>;
  }
}
