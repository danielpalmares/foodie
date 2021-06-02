import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipesByIngredientsAction } from '../../../store/recipesByIngredients';

import Layout from '../../Layout';
import RecipeCard from '../../../components/AppRecipeCard';
import AppTitle from '../../../components/AppTitle';
import Spinner from '../../../components/Spinner';

import { IoSearchOutline } from 'react-icons/io5';
import {
  SearchContainer,
  InputWrapper,
  GridLayout,
  PaginationContainer,
} from './styles';

import PreviousPageButton from '../../../components/AppPrevPageBtn';
import NextPageButton from '../../../components/AppNextPageBtn';

export default function Search() {
  const recipesRef = useRef();
  const dispatch = useDispatch();

  function handlePagination(prevOrNext) {
    prevOrNext === 'previous'
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage + 1);

    return recipesRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  // get all recipes from state
  const recipes = useSelector(
    state => state.recipesByIngredientsReducer.data?.recipes
  );

  // states for pagination
  const [recipesPerPage, setRecipesPerPage] = useState([]);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [previousButton, setPreviousButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  // states for other functionalities
  const [spinner, setSpinner] = useState(false);
  const [inputData, setInputData] = useState('');
  const [inputIngredients, setInputIngredients] = useState('');

  // get the recipes per page and store it in the state
  useEffect(() => {
    if (!recipes) return;
    const newRecipesPerPage = getSearchResultsPage(
      recipes,
      currentPage,
      resultsPerPage
    );
    setRecipesPerPage(newRecipesPerPage);
    pagination(recipes, currentPage, resultsPerPage);
    return;
  }, [recipes, currentPage, resultsPerPage]);

  useEffect(() => setSpinner(false), [recipes]);

  useEffect(() => {
    if (!inputIngredients) return;

    setSpinner(true);
    return dispatch(recipesByIngredientsAction(inputIngredients));
  }, [inputIngredients, dispatch]);

  // give us the recipes for page
  function getSearchResultsPage(recipesArr, curPage, resultsPerPage) {
    const start = (curPage - 1) * resultsPerPage;
    const end = curPage * resultsPerPage;

    return recipesArr.slice(start, end);
  }

  // setting up the inputIngredients
  function sendAction() {
    const ingredients = formatInputString(inputData);
    setCurrentPage(1);
    return setInputIngredients(ingredients);
  }

  // formatting input data
  function formatInputString(inputString) {
    const ingredientsString = inputString;
    const ingredientsArr = ingredientsString.replace(/\s+/g, ' ').split(',');
    const ingredientsArrFormatted = ingredientsArr.map(ing =>
      ing.trim().replace(' ', '+').toLowerCase()
    );
    const ingredientsFormatted = ingredientsArrFormatted.join(',');

    return ingredientsFormatted;
  }

  function pagination(recipes, currentPage, resultsPerPage) {
    // get the number of pages
    const numPages = Math.ceil(recipes.length / resultsPerPage); // array full of recipes / resultsPerPage = 20

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
    return;
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
              placeholder="Apple, Avocado, Potato..."
              onChange={e => setInputData(e.target.value)}
            />

            <button onClick={() => sendAction()}>
              <IoSearchOutline size={26} />
            </button>
          </InputWrapper>
        </header>

        <GridLayout ref={recipesRef}>
          {spinner ? (
            <Spinner />
          ) : (
            recipesPerPage &&
            recipesPerPage.map(rec => {
              return (
                <RecipeCard
                  key={rec.id}
                  title={rec.title}
                  imageSrc={rec.image}
                  likes={rec.likes}
                />
              );
            })
          )}
        </GridLayout>
        <PaginationContainer>
          {previousButton && (
            <PreviousPageButton
              handleClick={() => handlePagination('previous')}
              value={currentPage - 1}
            />
          )}
          {nextButton && (
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
