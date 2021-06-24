import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { resultsPerPage } from '../../../config/Search';

import { getPagination, getIngredientsFromInput } from '../../../utils';

import { recipesByIngredientsAction } from '../../../store/recipesByIngredients';
import { activePageAction } from '../../../store/activePage';
import { clearRecipeInformation } from '../../../store/recipeInformation';

import Layout from '../../Layout';
import AppRecipeCard from '../../../components/AppRecipeCard';
import AppTitle from '../../../components/AppTitle';
import Spinner from '../../../components/Spinner';
import PreviousPageButton from '../../../components/AppPrevPageBtn';
import NextPageButton from '../../../components/AppNextPageBtn';
import InputSearch from '../../../components/InputSearch';

import { SearchContainer, GridLayout, PaginationContainer } from './styles';

export default function Search() {
  const dispatch = useDispatch();
  const history = useHistory();
  const recipesRef = useRef();

  // get all recipes from state
  const recipes = useSelector(state => state.recipesByIngredients.data);

  // states for pagination
  const [recipesPerPage, setRecipesPerPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(null);
  const [previousButton, setPreviousButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);

  // states for other functionalities
  const [spinner, setSpinner] = useState(false);
  const [inputData, setInputData] = useState('');
  const [inputIngredients, setInputIngredients] = useState('');

  // page's initial position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // set active page
  useEffect(() => dispatch(activePageAction('search')));

  // fetch the recipes from api
  useEffect(() => {
    if (!inputIngredients) return;

    setSpinner(true);

    return dispatch(recipesByIngredientsAction(inputIngredients));
  }, [inputIngredients, dispatch]);

  // set spinner to false whenever the recipes has loaded
  useEffect(() => setSpinner(false), [recipes]);

  // get the recipes per page and store it in the state
  useEffect(() => {
    if (!recipes) return;

    // render the recipes while changing the state
    const newRecipesPerPage = getPagination(
      recipes,
      currentPage,
      resultsPerPage
    );

    return setRecipesPerPage(newRecipesPerPage);
  }, [recipes, currentPage]);

  // set how pagination will look like
  useEffect(() => {
    if (!recipesPerPage) return;

    return pagination(recipes, currentPage, resultsPerPage);
  }, [recipesPerPage, currentPage, recipes]); // recipes...

  // pagination functionality
  function pagination(recipes, currentPage, resultsPerPage) {
    if (!recipes) return;

    // get the number of pages
    const numPages = Math.ceil(recipes.length / resultsPerPage); // array full of recipes / resultsPerPage = 20
    setMaxPages(numPages);

    // possible situations
    // 1) page one, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      setNextButton(true);
      setPreviousButton(false);
      return;
    }

    // 2) other page
    if (currentPage < numPages) {
      setPreviousButton(true);
      setNextButton(true);
      return;
    }

    // 3) last page
    if (currentPage === numPages && numPages > 1) {
      setPreviousButton(true);
      setNextButton(false);
      return;
    }

    // 4) page one, and there are no other pages
    setPreviousButton(false);
    setNextButton(false);
    return;
  }

  // get stuff back to default, usually when searching for new recipes
  function backToDefault() {
    previousButton && setPreviousButton(false);
    nextButton && setNextButton(false);
    recipesPerPage.length !== 0 && setRecipesPerPage([]);
    currentPage !== 1 && setCurrentPage(1);
  }

  // handle functions
  function handlePagination(prevOrNext) {
    // set current page
    prevOrNext === 'previous'
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage + 1);

    // scroll to the top of the recipes
    recipesRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function handleSearchRecipes() {
    const ingredients = getIngredientsFromInput(inputData);

    // check if the ingredients are the same as before
    if (ingredients === inputIngredients) return;

    // if not, then get stuff back to default and set up ingredients to fetch after
    backToDefault();
    setInputIngredients(ingredients);
  }

  function handleRecipe(id) {
    if (!id) return;

    // clear previous recipe information state to prevent it from displaying before the new one
    dispatch(clearRecipeInformation());

    return history.push({
      pathname: '/recipe',
      search: `?id=${id}`,
    });
  }

  return (
    <Layout onlyBackButton>
      <SearchContainer>
        <header>
          <AppTitle>What's in your kitchen?</AppTitle>
          <span>Enter up to 2 ingredients or more</span>

          <InputSearch
            handleInputChange={e => setInputData(e.target.value)}
            handleSearch={() => handleSearchRecipes()}
            placeholder="Apple, Avocado, Peanut Butter..."
          />
        </header>

        <GridLayout ref={recipesRef}>
          {spinner && <Spinner />}

          {recipesPerPage &&
            !spinner &&
            recipesPerPage.map(rec => {
              return (
                <AppRecipeCard
                  key={rec.id}
                  title={rec.title}
                  imageSrc={rec.image}
                  likes={rec.likes}
                  showLikes
                  handleRecipe={() => handleRecipe(rec.id)}
                />
              );
            })}
        </GridLayout>

        <PaginationContainer>
          {previousButton && spinner === false && currentPage > 1 && (
            <PreviousPageButton
              handleClick={() => handlePagination('previous')}
              value={currentPage - 1}
            />
          )}
          {nextButton && spinner === false && currentPage < maxPages && (
            <NextPageButton
              handleClick={() => handlePagination('next')}
              value={currentPage + 1}
            />
          )}
        </PaginationContainer>
      </SearchContainer>
    </Layout>
  );
}
