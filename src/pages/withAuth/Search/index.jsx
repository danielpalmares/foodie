import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipesByIngredientsAction } from '../../../store/recipesByIngredients';

import Layout from '../../Layout';
import RecipeCard from '../../../components/AppRecipeCard';
import AppTitle from '../../../components/AppTitle';
import Spinner from '../../../components/Spinner';
import PreviousPageButton from '../../../components/AppPrevPageBtn';
import NextPageButton from '../../../components/AppNextPageBtn';

import { IoSearchOutline } from 'react-icons/io5';
import {
  SearchContainer,
  InputWrapper,
  GridLayout,
  PaginationContainer,
} from './styles';

export default function Search() {
  const dispatch = useDispatch();
  const recipesRef = useRef();

  // access to all recipes from state
  const recipes = useSelector(
    state => state.recipesByIngredientsReducer.data?.recipes
  );

  // states for pagination
  const [recipesPerPage, setRecipesPerPage] = useState([]);
  const [resultsPerPage, setResultsPerPage] = useState(10); // !magic number
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(null);
  const [previousButton, setPreviousButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  // states for other functionalities
  const [spinner, setSpinner] = useState(false);
  const [inputData, setInputData] = useState('');
  const [inputIngredients, setInputIngredients] = useState('');

  // fetch the recipes from api
  useEffect(() => {
    if (!inputIngredients) return;
    setSpinner(true);

    return dispatch(recipesByIngredientsAction(inputIngredients));
  }, [inputIngredients]);

  // set spinner to false whenever the recipes has loaded
  useEffect(() => setSpinner(false), [recipes]);

  // get the recipes per page and store it in the state
  useEffect(() => {
    if (!recipes) return;

    // render the recipes while changing the state
    const newRecipesPerPage = getSearchResultsPage(
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
  }, [recipesPerPage, currentPage]);

  // get the recipes for each page
  function getSearchResultsPage(recipesArr, curPage, resultsPerPage) {
    const start = (curPage - 1) * resultsPerPage;
    const end = curPage * resultsPerPage;

    return recipesArr.slice(start, end);
  }

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

  // handle pagination click event
  function handlePagination(prevOrNext) {
    // set current page
    prevOrNext === 'previous'
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage + 1);

    // scroll to the top of the recipes
    recipesRef.current.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // handle search click event (setting up the inputIngredients when the user searches)
  function handleSearchRecipes() {
    const ingredients = formatInputString(inputData);
    // check if the ingredients are the same as before
    if (ingredients === inputIngredients) return;

    // if not, then get stuff back to default and set up ingredients to fetch after
    backToDefault();
    setInputIngredients(ingredients);

    return;
  }

  // get stuff back to default, usually when searching for new recipes
  function backToDefault() {
    previousButton && setPreviousButton(false);
    nextButton && setNextButton(false);
    recipesPerPage.length !== 0 && setRecipesPerPage([]);
    currentPage !== 1 && setCurrentPage(1);

    return;
  }

  // format input data
  function formatInputString(inputString) {
    const ingredientsString = inputString;
    // check the whole string, replace double whitespace or more for one, and then split them by comma into an array
    const ingredientsArr = ingredientsString.replace(/\s+/g, ' ').split(',');
    // for each ingredient inside the array, remove whitespace from start and end, for others just replace for +
    const ingredientsArrFormatted = ingredientsArr.map(ing =>
      ing.trim().replace(' ', '+').toLowerCase()
    );
    // transform them back to string separated by comma
    const ingredientsFormatted = ingredientsArrFormatted.join(',');

    return ingredientsFormatted;
  }

  return (
    <Layout onlyBackButton>
      <SearchContainer>
        <header>
          <AppTitle>What's in your kitchen?</AppTitle>
          <span>Enter up to 2 ingredients or more</span>

          <InputWrapper>
            <input
              type="text"
              placeholder="Apple, Avocado, Peanut Butter..."
              onChange={e => setInputData(e.target.value)}
            />

            <button onClick={() => handleSearchRecipes()}>
              <IoSearchOutline size={26} />
            </button>
          </InputWrapper>
        </header>

        <GridLayout ref={recipesRef}>
          {spinner && <Spinner />}

          {recipesPerPage &&
            !spinner &&
            recipesPerPage.map(rec => {
              return (
                <RecipeCard
                  key={rec.id}
                  title={rec.title}
                  imageSrc={rec.image}
                  likes={rec.likes}
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
