import React, { useState, useEffect } from 'react';

import Layout from '../../Layout';
import RecipeCard from '../../../components/AppRecipeCard';
import AppTitle from '../../../components/AppTitle';

import { IoSearchOutline } from 'react-icons/io5';
import { SearchContainer, InputWrapper } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { recipesByIngredientsAction } from '../../../store/recipesByIngredients';

export default function Search() {
  const [inputSearch, setInputSearch] = useState('');
  const [inputIngredients, setInputIngredients] = useState(null);
  const dispatch = useDispatch();

  const recipes = useSelector(
    state => state.recipesByIngredientsReducer.data?.recipes
  );
  console.log(recipes);

  useEffect(() => {
    if (inputIngredients !== null)
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

        <main>
          {recipes &&
            recipes.map(rec => {
              return (
                <RecipeCard
                  key={rec.id}
                  title={rec.title}
                  imageSrc={rec.image}
                  likes={rec.likes}
                />
              );
            })}
        </main>
      </SearchContainer>
    </Layout>
  );
}
