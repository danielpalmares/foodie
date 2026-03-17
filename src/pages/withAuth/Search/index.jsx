import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { resultsPerPage } from '../../../config/Search';
import { getPagination } from '../../../utils';

import { recipesByIngredientsAction } from '../../../store/recipesByIngredients';
import { activePageAction } from '../../../store/activePage';
import { clearRecipeInformation } from '../../../store/recipeInformation';

import Layout from '../../Layout';
import AppTitle from '../../../components/AppTitle';
import Spinner from '../../../components/Spinner';
import PreviousPageButton from '../../../components/AppPrevPageBtn';
import NextPageButton from '../../../components/AppNextPageBtn';
import InputSearch from '../../../components/InputSearch';

import { IoSearchOutline } from 'react-icons/io5';

import { SearchContainer, GridLayout, PaginationContainer, SearchHeader, RecipeCard, RecipeCardImage, RecipeCardInfo } from './styles';

export default function Search() {
  const dispatch = useDispatch();
  const history = useHistory();
  const recipesRef = useRef();

  const recipes = useSelector(state => state.recipesByIngredients.data);

  const [recipesPerPage, setRecipesPerPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(null);
  const [previousButton, setPreviousButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [inputData, setInputData] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => { dispatch(activePageAction('search')); }, [dispatch]);

  useEffect(() => {
    if (!searchQuery) return;
    setSpinner(true);
    dispatch(recipesByIngredientsAction(searchQuery));
  }, [searchQuery, dispatch]);

  useEffect(() => {
    if (recipes) setSpinner(false);
  }, [recipes]);

  useEffect(() => {
    if (!recipes) return;
    const newRecipesPerPage = getPagination(recipes, currentPage, resultsPerPage);
    setRecipesPerPage(newRecipesPerPage);
  }, [recipes, currentPage]);

  useEffect(() => {
    if (!recipesPerPage || !recipes) return;
    const numPages = Math.ceil(recipes.length / resultsPerPage);
    setMaxPages(numPages);

    if (currentPage === 1 && numPages > 1) { setNextButton(true); setPreviousButton(false); return; }
    if (currentPage < numPages) { setPreviousButton(true); setNextButton(true); return; }
    if (currentPage === numPages && numPages > 1) { setPreviousButton(true); setNextButton(false); return; }
    setPreviousButton(false); setNextButton(false);
  }, [recipesPerPage, currentPage, recipes]);

  function handlePagination(prevOrNext) {
    prevOrNext === 'previous' ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage + 1);
    recipesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function handleSearchRecipes() {
    const query = inputData.trim();
    if (!query || query === searchQuery) return;
    setPreviousButton(false);
    setNextButton(false);
    setRecipesPerPage([]);
    setCurrentPage(1);
    setSearchQuery(query);
  }

  function handleRecipe(id) {
    if (!id) return;
    dispatch(clearRecipeInformation());
    return history.push({ pathname: '/recipe', search: `?foodieId=${id}` });
  }

  return (
    <Layout onlyBackButton>
      <SearchContainer>
        <SearchHeader>
          <AppTitle><IoSearchOutline size={22} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Search Recipes</AppTitle>
          <p>Find recipes by name or ingredients</p>

          <InputSearch
            handleInputChange={e => setInputData(e.target.value)}
            handleSearch={() => handleSearchRecipes()}
            placeholder="Pizza, pasta, chicken..."
          />
        </SearchHeader>

        <GridLayout ref={recipesRef}>
          {spinner && <Spinner />}

          {recipesPerPage && !spinner && recipesPerPage.length > 0 &&
            recipesPerPage.map(rec => (
              <RecipeCard key={rec.id} onClick={() => handleRecipe(rec.id)}>
                <RecipeCardImage imageSrc={rec.image} />
                <RecipeCardInfo>
                  <h4>{rec.title}</h4>
                </RecipeCardInfo>
              </RecipeCard>
            ))}

          {!spinner && searchQuery && recipes && recipes.length === 0 && (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#777', padding: '3rem 0' }}>
              No recipes found for "{searchQuery}"
            </p>
          )}
        </GridLayout>

        <PaginationContainer>
          {previousButton && !spinner && currentPage > 1 && (
            <PreviousPageButton handleClick={() => handlePagination('previous')} value={currentPage - 1} />
          )}
          {nextButton && !spinner && currentPage < maxPages && (
            <NextPageButton handleClick={() => handlePagination('next')} value={currentPage + 1} />
          )}
        </PaginationContainer>
      </SearchContainer>
    </Layout>
  );
}
