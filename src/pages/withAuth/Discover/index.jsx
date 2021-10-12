import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useGreeting } from '../../../hooks';

import {
  recipesType,
  recipesCuisines,
  recipesCookingTime,
} from '../../../config/Discover';

import { getSingleStringFromInput } from '../../../utils';

import { clearResultsRecipesAction } from '../../../store/resultsRecipes';
import { clearRecipeInformation } from '../../../store/recipeInformation';
import { activePageAction } from '../../../store/activePage';

import Layout from '../../../pages/Layout';
import AppTitle from '../../../components/AppTitle';
import CuisineCard from '../../../components/CuisineCard';
import InputSearch from '../../../components/InputSearch';
import RandomRecipeCard from '../../../components/RandomRecipeCard';
import FindRecipesCard from '../../../components/FindRecipesCard';
import RecipesGrid from '../../../components/RecipesGrid';

import dietSvg from '../../../assets/diet.svg';
import chefSvg from '../../../assets/chef.svg';
import tutorialSvg from '../../../assets/tutorial.svg';

import { IoArrowForwardOutline } from 'react-icons/io5';

import { Container, HorizontalList, SwipeDirection } from './styles';

export default function Discover() {
  // hooks call
  const dispatch = useDispatch();
  const history = useHistory();
  const [greeting] = useGreeting();

  // current user data from state
  const { loggedUser } = useSelector(state => state.user);

  // states
  const [inputData, setInputData] = useState('');

  // initial page's position
  useEffect(() => window.scrollTo(0, 0), []);

  // set the page as active
  useEffect(() => dispatch(activePageAction('discover')));

  // handle functions
  function handleRecipesByName() {
    const recipeName = getSingleStringFromInput(inputData);

    if (!recipeName) return;

    // clear the previous results state to prevent it from showing up before the new one
    dispatch(clearResultsRecipesAction());

    return history.push({
      pathname: `/results`,
      search: `?query=${recipeName}`,
    });
  }

  function handleRecipesByType(type) {
    if (!type) return;

    // clear the previous results state to prevent it from showing up before the new one
    dispatch(clearResultsRecipesAction());

    return history.push({
      pathname: `/results`,
      search: `?type=${type}`,
    });
  }

  function handleRecipesByCuisine(cuisine) {
    if (!cuisine) return;

    // clear the previous results state to prevent it from showing up before the new one
    dispatch(clearResultsRecipesAction());

    return history.push({
      pathname: `/results`,
      search: `?cuisine=${cuisine}`,
    });
  }

  function handleRecipesByTiming(maxReadyTime) {
    if (!maxReadyTime) return;

    // clear the previous results state to prevent it from showing up before the new one
    dispatch(clearResultsRecipesAction());

    return history.push({
      pathname: `/results`,
      search: `?maxReadyTime=${maxReadyTime}`,
    });
  }

  function handleRandomRecipe() {
    // clear the previous recipe information state to prevent it from showing up before the new one
    dispatch(clearRecipeInformation());

    return history.push({
      pathname: `/recipe`,
      search: `random`,
    });
  }

  return (
    <Layout defaultHeader>
      <Container>
        <main>
          <section>
            <AppTitle>
              {greeting} {loggedUser.name}
            </AppTitle>

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
              handleSearch={() => handleRecipesByName()}
              placeholder="We have tasty pizzas, try it :)"
            />

            <FindRecipesCard
              image={tutorialSvg}
              direction="/tutorials"
              text="Watch any tutorial you want, anytime, anywhere"
            />
          </section>

          <section>
            <AppTitle>Try to get a random recipe</AppTitle>

            <RandomRecipeCard handleRandom={() => handleRandomRecipe()} />
          </section>

          <section>
            <AppTitle>Find a recipe by its type</AppTitle>

            <HorizontalList>
              {recipesType.map(type => {
                return (
                  <li key={type.id}>
                    <button onClick={() => handleRecipesByType(type.id)}>
                      {type.text}
                    </button>
                  </li>
                );
              })}
            </HorizontalList>

            <SwipeDirection>
              <span>
                Swipe to see more <IoArrowForwardOutline size={16} />
              </span>
            </SwipeDirection>
          </section>

          <section>
            <AppTitle>Find a recipe by the maximum cooking time</AppTitle>

            <HorizontalList>
              {recipesCookingTime.map(time => {
                return (
                  <li key={time.id}>
                    <button onClick={() => handleRecipesByTiming(time.id)}>
                      {time.text}
                    </button>
                  </li>
                );
              })}
            </HorizontalList>

            <SwipeDirection>
              <span>
                Swipe to see more <IoArrowForwardOutline size={16} />
              </span>
            </SwipeDirection>
          </section>

          <section>
            <AppTitle>Curious about some other cuisines?</AppTitle>

            <RecipesGrid>
              {recipesCuisines.map(cuisine => {
                return (
                  <CuisineCard
                    key={cuisine.id}
                    image={cuisine.id}
                    title={cuisine.id}
                    handleClick={() => handleRecipesByCuisine(cuisine.id)}
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
