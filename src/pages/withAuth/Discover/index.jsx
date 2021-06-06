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
import { recipesByCuisineAction } from '../../../store/recipesByCuisine';
import { recipesByTimingAction } from '../../../store/recipesByTiming';
import { recipeVideosAction } from '../../../store/recipeVideos';

import {
  recipesType,
  recipesCuisines,
  recipesCookingTime,
} from '../../../config';

export default function Discover() {
  const dispatch = useDispatch();

  const recipes = useSelector(state => state.recipesByName?.data);
  const videos = useSelector(state => state.recipeVideos);
  console.log(recipes);
  console.log(videos);

  const [inputData, setInputData] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [recipeType, setRecipeType] = useState('');
  const [recipeTiming, setRecipeTiming] = useState(0);
  const [recipeCuisine, setRecipeCuisine] = useState('');
  const [searchVideos, setSearchVideos] = useState(false);

  // fetch recipes by name
  useEffect(() => {
    if (!recipeName) return;

    if (searchVideos) return dispatch(recipeVideosAction(recipeName));
    else return dispatch(recipesByNameAction(recipeName));
  }, [recipeName]);

  // fetch recipes by type
  useEffect(() => {
    if (!recipeType) return;

    return dispatch(recipesByTypeAction(recipeType));
  }, [recipeType]);

  // fetch recipes by cuisine
  useEffect(() => {
    if (!recipeCuisine) return;

    return dispatch(recipesByCuisineAction(recipeCuisine));
  }, [recipeCuisine]);

  // fetch recipes by timing
  useEffect(() => {
    if (!recipeTiming) return;

    return dispatch(recipesByTimingAction(recipeTiming));
  }, [recipeTiming]);

  // format input data
  function formatInputString(inputString) {
    const recipeString = inputString;
    const recipeFormatted = recipeString
      .replace(/\s+/g, ' ')
      .trim()
      .replace(' ', '+');

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

    if (type === recipeType) return;

    return setRecipeType(type);
  }

  function handleRecipesByCuisine(e) {
    const cuisine = e.target.dataset.cuisine;

    if (cuisine === recipeCuisine) return;

    return setRecipeCuisine(cuisine);
  }

  function handleRecipesByTiming(e) {
    const timing = e.target.dataset.timing;

    if (timing === recipeTiming) return;

    return setRecipeTiming(timing);
  }

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

  async function test() {
    const res = await fetch(
      'https://api.spoonacular.com/recipes/random?number=1&apiKey=ce9ca7ccb5154bcfa3dfda280afcdd30'
    );
    const data = await res.json();
    return console.log(data);
  }

  return (
    <Layout defaultHeader>
      <Container>
        <main>
          <section>
            <button onClick={() => test()}>TESTE</button>
          </section>

          <section>
            <AppTitle>{greetingByTime()} Adalberto</AppTitle>
            <FindRecipesCard />
          </section>

          <section>
            <AppTitle>Looking for a specific recipe?</AppTitle>
            <SearchVideoButton
              active={searchVideos}
              handleClick={() => setSearchVideos(!searchVideos)}
            />
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
                    <button
                      data-timing={time.id}
                      onClick={e => handleRecipesByTiming(e)}
                    >
                      {time.text}
                    </button>
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
                    data={cuisine}
                    image={cuisine}
                    title={cuisine}
                    handleClick={e => handleRecipesByCuisine(e)}
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
