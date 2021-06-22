import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Layout from '../../Layout';
import AppTitle from '../../../components/AppTitle';

import { recipeInformationAction } from '../../../store/recipeInformation';

import { getFractional } from '../../../utils';

import {
  IoAddOutline,
  IoRemoveOutline,
  IoHeartOutline,
  IoTimerOutline,
  IoThumbsUpOutline,
} from 'react-icons/io5';
import {
  Container,
  RecipeTitle,
  RecipePhoto,
  FavoriteButton,
  BadgeContainer,
  Badge,
  InfoContainer,
  IngredientsHeader,
  ChangeIngredients,
  IngredientsList,
  StepContainer,
} from './styles';

import { useDispatch, useSelector } from 'react-redux';

export default function Recipe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const { search } = useLocation();

  const id = search.includes('id') && search.split('=').pop();
  const random = search.includes('random') && search.replace('?', '');

  const recipe = useSelector(state => state.recipeInformation.recipe);

  useEffect(() => {
    dispatch(recipeInformationAction(id, random));
  }, [dispatch, id, random]);

  const [ingredients, setIngredients] = useState([]);
  const [servings, setServings] = useState(0);

  useEffect(() => {
    if (!recipe) return;

    setIngredients(recipe.ingredients);
    setServings(recipe.servings);
    return;
  }, [recipe]);

  function handleUpdateServings(newServings) {
    ingredients.forEach(ingredient => {
      ingredient.amount = (ingredient.amount * newServings) / servings;
    });

    setServings(newServings);
    return;
  }

  return (
    <Layout onlyBackButton>
      <Container>
        {recipe && (
          <>
            <section>
              <RecipeTitle>{recipe.title}</RecipeTitle>

              <RecipePhoto imageSrc={recipe.image}>
                <FavoriteButton data-id={recipe.id}>
                  <IoHeartOutline size={26} />
                </FavoriteButton>
              </RecipePhoto>

              <InfoContainer>
                <span>
                  <IoTimerOutline size={18} /> {recipe.cookingTime} min
                </span>
                <span>
                  <IoThumbsUpOutline size={18} /> {recipe.likes}
                  {recipe.likes === 1 ? ' like' : ' likes'}
                </span>
              </InfoContainer>

              <BadgeContainer>
                {recipe.dairyFree && <Badge>Dairy Free</Badge>}
                {recipe.glutenFree && <Badge>Gluten Free</Badge>}
                {recipe.veryHealthy && <Badge>Very Healthy</Badge>}
                {recipe.veryPopular && <Badge>Very Popular</Badge>}
                {recipe.sustainable && <Badge>Sustainable</Badge>}
              </BadgeContainer>
            </section>

            <section>
              <IngredientsHeader>
                <AppTitle>Ingredients</AppTitle>
                <ChangeIngredients>
                  <span>
                    {servings}
                    {servings === 1 ? ' serving' : ' servings'}
                  </span>
                  <button
                    className={servings === 1 ? 'inactive' : ''}
                    onClick={() =>
                      servings > 1 && handleUpdateServings(servings - 1)
                    }
                  >
                    <IoRemoveOutline size={14} />
                  </button>
                  <button onClick={() => handleUpdateServings(servings + 1)}>
                    <IoAddOutline size={14} />
                  </button>
                </ChangeIngredients>
              </IngredientsHeader>

              <IngredientsList>
                {ingredients.map((ingredient, i) => {
                  return (
                    <li key={i + 1}>
                      <span>{ingredient.name}</span>
                      <strong>
                        {getFractional(ingredient.amount)} {ingredient.unit}
                      </strong>
                    </li>
                  );
                })}
              </IngredientsList>
            </section>

            <section>
              <AppTitle>How to cook</AppTitle>
              {recipe.instructions.map((step, i) => {
                return (
                  <StepContainer key={i + 1}>
                    <span>Step {step.number}</span>
                    <p>{step.step}</p>
                  </StepContainer>
                );
              })}
            </section>
          </>
        )}
      </Container>
    </Layout>
  );
}
