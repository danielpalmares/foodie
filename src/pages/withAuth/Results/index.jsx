import React, { useEffect, useState } from 'react';
import AppTitle from '../../../components/AppTitle';
import Layout from '../../Layout';

import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useObserver } from '../../../hooks';
import Spinner from '../../../components/Spinner';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import AppRecipeCard from '../../../components/AppRecipeCard';
import { resultsRecipesAction } from '../../../store/resultsRecipes';
import { GridLayout } from '../../../components/RecipesGrid/styles';

import { getPagination } from '../../../utils';

import { clearRecipeInformation } from '../../../store/recipeInformation';

export default function Results() {
  const dispatch = useDispatch();
  const history = useHistory();
  const recipes = useSelector(state => state.resultsRecipes.recipes);

  const [setRef, visible, clearRef] = useObserver({
    threshold: 1,
  });

  // for rendering when scrolling
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [resultsCount, setResultsCount] = useState(10);

  const [resultsRecipes, setResultsRecipes] = useState(null);

  const [spinner, setSpinner] = useState(false);

  const { search } = useLocation();
  const query = search.split('=').pop().replaceAll('+', ' '); // ?query=pizza

  // fetch the recipes
  useEffect(() => {
    if (!search) return;
    setSpinner(true);

    dispatch(clearRecipeInformation());
    return dispatch(resultsRecipesAction(search));
  }, [search, dispatch]);

  useEffect(() => {
    if (!recipes) return;

    // if we got the recipes then stop spinner
    if (recipes) setSpinner(false);

    // first time we got recipes
    if (currentPage === 1) {
      const recipesPerPage = getPagination(
        recipes,
        currentPage,
        resultsPerPage
      );

      return setResultsRecipes(recipesPerPage);
    }

    // after first time we got recipes
    if (currentPage > 1) {
      const recipesPerPage = getPagination(
        recipes,
        currentPage,
        resultsPerPage
      );

      // create a copy of the current recipes array
      let resultsPushed = resultsRecipes.slice();

      // then push the new ones
      resultsPushed.push(...recipesPerPage);

      setResultsRecipes(resultsPushed);
      setResultsCount(resultsCount + 10);
      return;
    }

    return;
  }, [recipes, currentPage]);

  useEffect(() => {
    if (visible) {
      setCurrentPage(currentPage + 1);
      clearRef();
    }
  }, [visible]);

  function handleRecipe(id) {
    return history.push({
      pathname: '/recipe',
      search: `?id=${id}`,
    });
  }

  return (
    <Layout onlyBackButton>
      <Container>
        <AppTitle>Results for {query}</AppTitle>
        <main>
          {spinner && <Spinner />}

          <GridLayout>
            {resultsRecipes &&
              resultsRecipes.map((recipe, i) => {
                return (
                  <AppRecipeCard
                    key={recipe.id}
                    refValue={resultsCount - 1 === i ? setRef : null}
                    title={recipe.title}
                    likes={recipe.likes}
                    imageSrc={recipe.image}
                    handleRecipe={() => handleRecipe(recipe.id)}
                  />
                );
              })}
          </GridLayout>
        </main>
      </Container>
    </Layout>
  );
}
