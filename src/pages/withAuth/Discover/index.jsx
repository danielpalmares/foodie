import React, { useEffect, useState } from 'react';

import Layout from '../../../pages/Layout';

import BasedRecipeCard from '../../../components/BasedRecipeCard';

import { Container, HorizontalList } from './styles';
import FindRecipesCard from '../../../components/FindRecipesCard';

import AppTitle from '../../../components/AppTitle';
import InputSearch from '../../../components/InputSearch';

import { useSelector, useDispatch } from 'react-redux';
import RandomRecipeCard from '../../../components/RandomRecipeCard';

import RecipesGrid from '../../../components/RecipesGrid';
import SearchVideoButton from '../../../components/SearchVideoButton';

import { apiComplexSearch } from '../../../services/spoonacular/api';
import { recipesByNameAction } from '../../../store/recipesByName';

export default function Discover() {
  const recipesType = [
    { id: 'main+course', text: 'Main Course' },
    { id: 'side+dish', text: 'Side Dish' },
    { id: 'dessert', text: 'Dessert' },
    { id: 'appetizer', text: 'Appetizer' },
    { id: 'salad', text: 'Salad' },
    { id: 'bread', text: 'Bread' },
    { id: 'breakfast', text: 'Breakfast' },
    { id: 'soup', text: 'Soup' },
    { id: 'beverage', text: 'Beverage' },
    { id: 'sauce', text: 'Sauce' },
    { id: 'snack', text: 'Snack' },
    { id: 'drink', text: 'Drink' },
  ];

  const recipesCookingTime = [
    { id: 5, text: '5 min' },
    { id: 10, text: '10 min' },
    { id: 15, text: '15 min' },
    { id: 20, text: '20 min' },
    { id: 25, text: '25 min' },
    { id: 30, text: '30 min' },
  ];

  const recipesCuisines = [
    'british',
    'caribbean',
    'chinese',
    'french',
    'greek',
    'irish',
    'italian',
    'japanese',
    'jewish',
    'mexican',
    'nordic',
    'spanish',
  ];

  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipesByName.data?.recipes);
  console.log(recipes);

  const [inputData, setInputData] = useState('');
  const [recipeName, setRecipeName] = useState('');

  useEffect(() => {
    if (!recipeName) return;

    // call dispatch
    return dispatch(recipesByNameAction(recipeName));
  }, [recipeName, dispatch]);

  async function fetchRecipesByIngredients() {
    const res = await apiComplexSearch.get('?query=pizza');
    console.log(res);
    return;
  }

  // format input data
  function formatInputString(inputString) {
    const recipeString = inputString;
    // check the whole string, replace double whitespace or more for one, and then remove whitespace from start and end
    const recipeFormatted = recipeString.replace(/\s+/g, ' ').trim();

    return recipeFormatted;
  }

  // send recipe name formatted to its state
  function handleSearch() {
    const recipeName = formatInputString(inputData);
    return setRecipeName(recipeName);
  }

  function handleRecipesByCuisine() {}

  const greetingByTime = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 19) {
      return 'Good Afternoon!';
    } else {
      return 'Good Night!';
    }
  };

  return (
    <Layout defaultHeader>
      <Container>
        <main>
          <section>
            <button onClick={() => fetchRecipesByIngredients()}>TESTE</button>
          </section>

          <section>
            <AppTitle>{greetingByTime()} Adalberto</AppTitle>
            <FindRecipesCard />
          </section>

          <section>
            <AppTitle>Looking for a specific recipe?</AppTitle>
            <SearchVideoButton active />
            <InputSearch
              handleInputChange={e => setInputData(e.target.value)}
              handleSearch={() => handleSearch()}
              placeholder="We have tasty pizzas, try it :)"
            />
          </section>

          <section>
            <AppTitle>Try to get a random recipe</AppTitle>
            <RandomRecipeCard />
          </section>

          <section>
            <AppTitle>Find a recipe by its type</AppTitle>
            <HorizontalList>
              {recipesType.map(type => {
                return (
                  <li key={type.id}>
                    <button>{type.text}</button>
                  </li>
                );
              })}
            </HorizontalList>
          </section>

          <section>
            <AppTitle>Or more, get a quick recipe</AppTitle>
            <HorizontalList>
              {recipesCookingTime.map(time => {
                return (
                  <li key={time.id}>
                    <button>{time.text}</button>
                  </li>
                );
              })}
            </HorizontalList>
          </section>

          <section>
            <AppTitle>Curious about other cuisines?</AppTitle>
            <RecipesGrid>
              {recipesCuisines.map(cuisine => {
                return (
                  <BasedRecipeCard
                    key={cuisine}
                    image={cuisine}
                    title={cuisine}
                    handleClick={_ => handleRecipesByCuisine(cuisine)}
                  />
                );
              })}
            </RecipesGrid>
          </section>
        </main>
      </Container>
    </Layout>
  );
}
