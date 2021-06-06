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
import { recipesByTypeAction } from '../../../store/recipesByType';

import {
  recipesType,
  recipesCuisines,
  recipesCookingTime,
} from '../../../config';

export default function Discover() {
  const dispatch = useDispatch();

  const recipes = useSelector(state => state.recipesByType?.data);
  console.log(recipes);

  const [inputData, setInputData] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [recipeType, setRecipeType] = useState('');

  useEffect(() => {
    if (!recipeName) return;

    return dispatch(recipesByNameAction(recipeName));
  }, [recipeName, dispatch]);

  useEffect(() => {
    if (!recipeType) return;

    return dispatch(recipesByTypeAction(recipeType));
  }, [recipeType, dispatch]);

  // format input data
  function formatInputString(inputString) {
    const recipeString = inputString;
    const recipeFormatted = recipeString.replace(/\s+/g, ' ').trim();

    return recipeFormatted;
  }

  // send recipe name formatted to its state
  function handleSearch() {
    const newRecipeName = formatInputString(inputData);

    if (newRecipeName === recipeName) return;

    return setRecipeName(newRecipeName);
  }

  function handleRecipesByType(e) {
    const type = e.target.dataset.type;

    return setRecipeType(type);
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
            {/* <button onClick={() => fetchRecipesByIngredients()}>TESTE</button> */}
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
                    <button
                      data-type={type.id}
                      onClick={e => handleRecipesByType(e)}
                    >
                      {type.text}
                    </button>
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
