import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../../Layout';
import RecipeCard from '../../../components/AppRecipeCard';
import AppTitle from '../../../components/AppTitle';

import { IoSearchOutline } from 'react-icons/io5';
import { SearchContainer, InputWrapper } from './styles';

export default function Search() {
  const [inputSearch, setInputSearch] = useState('');
  const [inputIngredients, setInputIngredients] = useState([]);
  console.log(inputIngredients);

  function getInputChange(e) {
    e.preventDefault();

    return setInputSearch(e.target.value);
  }

  function formatInputString(inputString) {
    const ingredientsString = inputString;
    const ingredientsArr = ingredientsString.replace(/\s+/g, ' ').split(',');
    const ingredientsArrFormatted = ingredientsArr.map(ing =>
      ing.trim().replace(' ', '+').toLowerCase()
    );
    return setInputIngredients(ingredientsArrFormatted);
  }

  async function fetchRecipesByIngredients() {}

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
              onChange={e => getInputChange(e)}
            />

            <button onClick={e => formatInputString(inputSearch)}>
              <IoSearchOutline size={26} />
            </button>
          </InputWrapper>
        </header>

        <main>
          <RecipeCard />
        </main>
      </SearchContainer>
    </Layout>
  );
}
