import React, { useEffect, useState } from 'react';
import {
  Redirect,
  useHistory,
  generatePath,
  useRouteMatch,
  Route,
  BrowserRouter,
  Switch,
} from 'react-router-dom';

import { IoArrowForwardOutline } from 'react-icons/io5';

import Layout from '../../../pages/Layout';

import CuisineCards from '../../../components/CuisineCards';

import { Container, HorizontalList, SwipeDirection } from './styles';
import FindRecipesCard from '../../../components/FindRecipesCard';

import AppTitle from '../../../components/AppTitle';
import InputSearch from '../../../components/InputSearch';

import { useSelector, useDispatch } from 'react-redux';
import RandomRecipeCard from '../../../components/RandomRecipeCard';

import RecipesGrid from '../../../components/RecipesGrid';

import dietSvg from '../../../assets/diet.svg';
import chefSvg from '../../../assets/chef.svg';
import tutorialSvg from '../../../assets/tutorial.svg';

import {
  recipesType,
  recipesCuisines,
  recipesCookingTime,
} from '../../../config';
import { activePageAction } from '../../../store/activePage';

import Results from '../../../pages/withAuth/Results';

import { getSingleStringFromInput } from '../../../utils';

import { useGreeting } from '../../../hooks';

import { clearResultsRecipesAction } from '../../../store/resultsRecipes';
import { clearRecipeInformation } from '../../../store/recipeInformation';

export default function Discover() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector(state => state.user);

  const [greeting] = useGreeting();
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => dispatch(activePageAction('discover')));

  function handleRecipesByName() {
    const recipeName = getSingleStringFromInput(inputData);

    if (!recipeName) return;

    dispatch(clearResultsRecipesAction());

    return history.push({
      pathname: `/results`,
      search: `?query=${recipeName}`,
    });
  }

  function handleRecipesByType(e) {
    const type = e.target.dataset.type;

    if (!type) return;

    dispatch(clearResultsRecipesAction());

    return history.push({
      pathname: `/results`,
      search: `?type=${type}`,
    });
  }

  function handleRecipesByCuisine(e) {
    const cuisine = e.target.dataset.cuisine;

    if (!cuisine) return;

    dispatch(clearResultsRecipesAction());

    return history.push({
      pathname: `/results`,
      search: `?cuisine=${cuisine}`,
    });
  }

  function handleRecipesByTiming(e) {
    const maxReadyTime = e.target.dataset.timing;

    if (!maxReadyTime) return;

    dispatch(clearResultsRecipesAction());
  }

  function handleRandomRecipe() {
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
              {greeting} {user?.name}
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

            <SwipeDirection>
              <span>
                Swipe to see more <IoArrowForwardOutline size={16} />
              </span>
            </SwipeDirection>
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
                  <CuisineCards
                    key={cuisine.id}
                    data={cuisine.id}
                    image={cuisine.id}
                    title={cuisine.id}
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
