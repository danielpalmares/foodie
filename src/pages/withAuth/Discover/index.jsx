import React, { useEffect, useState } from 'react';

import Layout from '../../../pages/Layout';

import BasedRecipeCard from '../../../components/BasedRecipeCard';

import { Container, HorizontalList } from './styles';
import FindRecipesCard from '../../../components/FindRecipesCard';
import Wrapper from '../../../components/Wrapper';
import AppTitle from '../../../components/AppTitle';
import InputSearch from '../../../components/InputSearch';

import { useSelector, useDispatch } from 'react-redux';
import RandomRecipeCard from '../../../components/RandomRecipeCard';

import RecipesGrid from '../../../components/RecipesGrid';
import SearchVideoButton from '../../../components/SearchVideoButton';

import dietSvg from '../../../assets/diet.svg';
import chefSvg from '../../../assets/chef.svg';
import tutorialSvg from '../../../assets/tutorial.svg';

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
import { activePageAction } from '../../../store/activePage';

export default function Discover() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(activePageAction('discover')));

  const recipes = useSelector(state => state.recipesByName?.data);
  const videos = useSelector(state => state.recipeVideos);
  console.log(recipes);
  console.log(videos);

  const [inputData, setInputData] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [recipeType, setRecipeType] = useState('');
  const [recipeTiming, setRecipeTiming] = useState(0);
  const [recipeCuisine, setRecipeCuisine] = useState('');

  // fetch recipes by name
  useEffect(() => {
    if (!recipeName) return;

    return dispatch(recipesByNameAction(recipeName));
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
            <AppTitle>{greetingByTime()} Adalberto</AppTitle>
            <FindRecipesCard
              image={dietSvg}
              direction="/search"
              text="Find recipes based on what you already have on your kitchen"
            />
            <FindRecipesCard
              image={chefSvg}
              direction="/upload"
              text="Make lots of recipes and build an amazing progress until become a chef!"
            />
          </section>

          <section>
            <AppTitle>Looking for a specific recipe?</AppTitle>
            <InputSearch
              handleInputChange={e => setInputData(e.target.value)}
              handleSearch={() => handleSearch()}
              placeholder="We have tasty pizzas, try it :)"
            />
            <FindRecipesCard
              image={tutorialSvg}
              direction="/favorites" // change later
              text="Watch any tutorial you want, anytime, anywhere"
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
            <AppTitle>Curious about some other cuisines?</AppTitle>
            <RecipesGrid>
              {recipesCuisines.map(cuisine => {
                return (
                  <BasedRecipeCard
                    key={cuisine.id}
                    data={cuisine.id}
                    image={cuisine.id}
                    title={cuisine.id}
                    text={cuisine.info}
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
