import React from 'react';

import Layout from '../../Layout';
import RecipeCard from '../../../components/RecipeCard';
import AppTitle from '../../../components/AppTitle';

import { IoSearchOutline } from 'react-icons/io5';
import { SearchContainer, InputWrapper } from './styles';

export default function Search() {
  return (
    <Layout onlyBackButton>
      <SearchContainer>
        <header>
          <AppTitle>What's in your kitchen?</AppTitle>
          <span>Enter up to 2 ingredients or more</span>

          <InputWrapper>
            <input type="text" placeholder="Apple, Avocado, Potato..." />

            <button>
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
