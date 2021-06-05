import React, { useState } from 'react';

import Layout from '../../../pages/Layout';

import BasedRecipeCard from '../../../components/BasedRecipeCard';

import { DiscoverContainer, DrinkList } from './styles';
import FindRecipesCard from '../../../components/FindRecipesCard';

import AppTitle from '../../../components/AppTitle';
import InputSearch from '../../../components/InputSearch';

import { useSelector, useDispatch } from 'react-redux';
import RandomRecipeCard from '../../../components/RandomRecipeCard';

import RecipesGrid from '../../../components/RecipesGrid';

export default function Discover() {
  const [inputData, setInputData] = useState();

  const recipeTypes = [
    'main course',
    'side dish',
    'dessert',
    'appetizer',
    'salad',
    'bread',
    'breakfast',
    'soup',
    'beverage',
    'sauce',
    'snack',
    'drink',
  ];

  const recipes = useSelector(state => state.recipesByName?.data.recipes);

  console.log(recipes);

  async function fetchRecipesByIngredients() {
    const res = await fetch(
      'https://api.spoonacular.com/recipes/complexSearch?type=dessert&apiKey=ce9ca7ccb5154bcfa3dfda280afcdd30'
    );
    const data = await res.json();
    return console.log(data);
  }

  function handleSearch() {}

  const greetingByTime = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 19) {
      return 'Good Afternoon!';
    } else {
      return 'Good Night!';
    }
  };

  return (
    <Layout defaultHeader>
      <DiscoverContainer>
        <main>
          <section>
            <AppTitle>{greetingByTime()} Adalberto</AppTitle>
            <FindRecipesCard />
          </section>

          <section>
            <AppTitle>Looking for a specific recipe?</AppTitle>
            <InputSearch placeholderText="We have tasty pizzas, try it :)" />
          </section>

          <section>
            <AppTitle>Try to get a random recipe</AppTitle>
            <RandomRecipeCard></RandomRecipeCard>
          </section>

          <section>
            <AppTitle>Find a recipe by its type</AppTitle>
            <DrinkList>
              {recipeTypes.map(type => {
                return (
                  <li>
                    <button>{type}</button>
                  </li>
                );
              })}
            </DrinkList>
          </section>

          <section>
            <AppTitle>Curious about other cuisines?</AppTitle>

            <RecipesGrid>
              <BasedRecipeCard
                image="british"
                title="British"
                handleClick={e => fetchRecipesByIngredients(e, 'bread')}
              />

              <BasedRecipeCard
                image="caribbean"
                title="Caribbean"
                handleClick={e => fetchRecipesByIngredients(e, 'bread')}
              />

              <BasedRecipeCard
                image="chinese"
                title="Chinese"
                handleClick={e => fetchRecipesByIngredients(e, 'milk')}
              />

              <BasedRecipeCard
                image="french"
                title="French"
                handleClick={e => fetchRecipesByIngredients(e, 'orange')}
              />

              <BasedRecipeCard
                image="greek"
                title="Greek"
                handleClick={e => fetchRecipesByIngredients(e, 'meat')}
              />

              <BasedRecipeCard
                image="irish"
                title="Irish"
                handleClick={e => fetchRecipesByIngredients(e, 'pizza')}
              />

              <BasedRecipeCard
                image="italian"
                title="Italian"
                handleClick={e => fetchRecipesByIngredients(e, 'pasta')}
              />

              <BasedRecipeCard
                image="japanese"
                title="Japanese"
                handleClick={e => fetchRecipesByIngredients(e, 'egg')}
              />

              <BasedRecipeCard
                image="jewish"
                title="Jewish"
                handleClick={e => fetchRecipesByIngredients(e, 'egg')}
              />

              <BasedRecipeCard
                image="mexican"
                title="Mexican"
                handleClick={e => fetchRecipesByIngredients(e, 'egg')}
              />

              <BasedRecipeCard
                image="nordic"
                title="Nordic"
                handleClick={e => fetchRecipesByIngredients(e, 'egg')}
              />

              <BasedRecipeCard
                image="spanish"
                title="Spanish"
                handleClick={e => fetchRecipesByIngredients(e, 'egg')}
              />
            </RecipesGrid>
          </section>
        </main>
      </DiscoverContainer>
    </Layout>
  );
}
