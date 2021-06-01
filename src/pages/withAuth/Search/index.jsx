import React, { useState, useEffect } from 'react';
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
  const dispatch = useDispatch();

  // get all recipes from state
  const recipes = useSelector(
    state => state.recipesByIngredientsReducer.data?.recipes
  );

  // states for pagination
  const [recipesPerPage, setRecipesPerPage] = useState([]);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [previousButton, setPreviousButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  // states for other functionalities
  const [spinner, setSpinner] = useState(false);
  const [inputData, setInputData] = useState('');
  const [inputIngredients, setInputIngredients] = useState('');

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

        <GridLayout>
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
          <PaginationContainer>
            {previousButton && (
              <PreviousPageButton
                handleClick={() => setCurrentPage(currentPage - 1)}
                value={currentPage - 1}
              />
            )}
            {nextButton && (
              <NextPageButton
                handleClick={() => setCurrentPage(currentPage + 1)}
                value={currentPage + 1}
              />
            )}
          </PaginationContainer>
        </GridLayout>
      </SearchContainer>
    </Layout>
  );
}
