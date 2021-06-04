import React, { useState } from 'react';

import Layout from '../../../pages/Layout';

import BasedRecipeCard from '../../../components/BasedRecipeCard';

import { DiscoverContainer, DrinkList } from './styles';
import FindRecipesCard from '../../../components/FindRecipesCard';

import AppTitle from '../../../components/AppTitle';
import InputSearch from '../../../components/InputSearch';

import { useSelector, useDispatch } from 'react-redux';

export default function Discover() {
  const [inputData, setInputData] = useState();

  const recipes = useSelector(state => state.recipesByName.data?.recipes);
  console.log(recipes);

  function fetchRecipesByIngredients() {
    return console.log('oi');
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
            <AppTitle>Search for some recipe</AppTitle>
            <InputSearch placeholderText="We have tasty pizzas, try it :)" />
          </section>

          <section>
            <AppTitle>Up to drink something?</AppTitle>
            <DrinkList>
              <li>
                <button>Wine</button>
              </li>
              <li>
                <button>Vodka</button>
              </li>
              <li>
                <button>Whiskey</button>
              </li>
              <li>
                <button>Rum</button>
              </li>
              <li>
                <button>Tea</button>
              </li>
              <li>
                <button>Coffee</button>
              </li>
              <li>
                <button>Apple juice</button>
              </li>
            </DrinkList>
          </section>

          <section>
            <AppTitle>Usual ingredients based recipes</AppTitle>

            <BasedRecipeCard
              image="bread.jpg"
              basedIngredient="Bread"
              handleClick={e => fetchRecipesByIngredients(e, 'bread')}
            />

            <BasedRecipeCard
              image="milk.jpg"
              basedIngredient="Milk"
              handleClick={e => fetchRecipesByIngredients(e, 'milk')}
            />

            <BasedRecipeCard
              image="orange.jpg"
              basedIngredient="Orange"
              handleClick={e => fetchRecipesByIngredients(e, 'orange')}
            />

            <BasedRecipeCard
              image="meat.jpg"
              basedIngredient="Meat"
              handleClick={e => fetchRecipesByIngredients(e, 'meat')}
            />

            <BasedRecipeCard
              image="pizza.jpg"
              basedIngredient="Pizza"
              handleClick={e => fetchRecipesByIngredients(e, 'pizza')}
            />

            <BasedRecipeCard
              image="pasta.jpg"
              basedIngredient="Pasta"
              handleClick={e => fetchRecipesByIngredients(e, 'pasta')}
            />

            <BasedRecipeCard
              image="egg.jpg"
              basedIngredient="Egg"
              handleClick={e => fetchRecipesByIngredients(e, 'egg')}
            />
          </section>
        </main>
      </DiscoverContainer>
    </Layout>
  );
}
