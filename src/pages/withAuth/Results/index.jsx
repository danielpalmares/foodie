import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { resultsPerPage } from '../../../config/Results';
import { useObserver } from '../../../hooks';
import { getPagination } from '../../../utils';

import { resultsRecipesAction } from '../../../store/resultsRecipes';
import { clearRecipeInformation } from '../../../store/recipeInformation';

import Layout from '../../Layout';
import AppTitle from '../../../components/AppTitle';
import Spinner from '../../../components/Spinner';

import { IoTimerOutline } from 'react-icons/io5';

import { Container, ResultsGrid, ResultCard, ResultImage, ResultInfo } from './styles';

export default function Results() {
  const dispatch = useDispatch();
  const history = useHistory();
  const recipes = useSelector(state => state.resultsRecipes.recipes);

  const [setRef, visible, clearRef] = useObserver({ threshold: 1 });
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsCount, setResultsCount] = useState(10);
  const [resultsRecipes, setResultsRecipes] = useState(null);
  const [spinner, setSpinner] = useState(false);

  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') || search.split('=').pop().replaceAll('+', ' ');

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    if (!search) return;
    setSpinner(true);
    dispatch(clearRecipeInformation());
    dispatch(resultsRecipesAction(search));
  }, [search, dispatch]);

  useEffect(() => {
    if (!recipes) return;
    setSpinner(false);

    if (currentPage === 1) {
      const recipesPerPage = getPagination(recipes, currentPage, resultsPerPage);
      return setResultsRecipes(recipesPerPage);
    }

    if (currentPage > 1) {
      const recipesPerPage = getPagination(recipes, currentPage, resultsPerPage);
      let resultsPushed = resultsRecipes ? resultsRecipes.slice() : [];
      resultsPushed.push(...recipesPerPage);
      setResultsRecipes(resultsPushed);
      setResultsCount(resultsCount + 10);
    }
  }, [recipes, currentPage]);

  useEffect(() => {
    if (visible) {
      setCurrentPage(currentPage + 1);
      clearRef();
    }
  }, [visible]);

  function handleRecipe(id) {
    dispatch(clearRecipeInformation());
    return history.push({ pathname: '/recipe', search: `?foodieId=${id}` });
  }

  return (
    <Layout onlyBackButton>
      <Container>
        <AppTitle>Results for "{query}"</AppTitle>

        {spinner && <Spinner />}

        {!spinner && resultsRecipes && resultsRecipes.length === 0 && (
          <p style={{ textAlign: 'center', color: '#777', padding: '4rem 0' }}>
            No recipes found. Try a different search term.
          </p>
        )}

        <ResultsGrid>
          {resultsRecipes && resultsRecipes.map((recipe, i) => (
            <ResultCard
              key={recipe.id}
              ref={resultsCount - 1 === i ? setRef : null}
              onClick={() => handleRecipe(recipe.id)}
            >
              <ResultImage imageSrc={recipe.image} />
              <ResultInfo>
                <h4>{recipe.title}</h4>
                {recipe.readyInMinutes && (
                  <span><IoTimerOutline size={13} /> {recipe.readyInMinutes} min</span>
                )}
              </ResultInfo>
            </ResultCard>
          ))}
        </ResultsGrid>
      </Container>
    </Layout>
  );
}
