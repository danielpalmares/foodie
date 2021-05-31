import React, { useState, useEffect } from 'react';

import Layout from '../../Layout';
import RecipeCard from '../../../components/AppRecipeCard';
import AppTitle from '../../../components/AppTitle';
import Spinner from '../../../components/Spinner';

import { IoSearchOutline } from 'react-icons/io5';
import { SearchContainer, InputWrapper, GridLayout } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { recipesByIngredientsAction } from '../../../store/recipesByIngredients';

export default function Search() {
  const [inputSearch, setInputSearch] = useState('');
  const [inputIngredients, setInputIngredients] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();

  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  // pagination buttons
  const [previousButton, setPreviousButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);

  const recipes = useSelector(
    state => state.recipesByIngredientsReducer.data?.recipes
  );
  console.log(recipes);

  useEffect(() => setSpinner(false), [recipes]);

  useEffect(() => {
    if (!inputIngredients) return;

    setSpinner(true);
    return dispatch(recipesByIngredientsAction(inputIngredients));
  }, [inputIngredients]);

  // setting up the inputIngredients
  function sendAction() {
    const ingredients = formatInputString(inputSearch);
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

  // give us the recipes for page
  function getSearchResultsPage(
    recipesArr,
    page = currentPage,
    resultsPerPage
  ) {
    const start = (page - 1) * resultsPerPage;
    const end = page * resultsPerPage;

    return recipesArr.slice(start, end);
  }

  function pagination(recipes, resultsPerPage, currentPage) {
    // get the number of pages
    const numPages = Math.ceil(recipes.length / resultsPerPage); // array full of recipes / resultsPerPage = 20

    // possible situations
    // 1) page one, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      setNextButton(true);
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
              onChange={e => setInputSearch(e.target.value)}
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
            recipes &&
            recipes.map(rec => {
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
      </SearchContainer>
    </Layout>
  );
}
