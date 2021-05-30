import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../../services/spoonacular/api';

import Layout from '../../Layout';
import RecipeCard from '../../../components/AppRecipeCard';
import AppTitle from '../../../components/AppTitle';

import { IoSearchOutline } from 'react-icons/io5';
import { SearchContainer, InputWrapper } from './styles';

const API_KEY = 'ce9ca7ccb5154bcfa3dfda280afcdd30';

export default function Search() {
  const [inputSearch, setInputSearch] = useState('');
  const [inputIngredients, setInputIngredients] = useState(null);

  useEffect(() => {
    async function getData() {
      inputIngredients !== null &&
        (await fetchRecipesByIngredients(inputIngredients));
    }
    getData();
  }, [inputIngredients]);

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

  async function fetchRecipesByIngredients() {
    try {
      const ing = inputIngredients.join(',');
      console.log(ing);
      const res = await api.get(`?includeIngredients=${ing}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
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
