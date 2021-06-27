import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { WhatsappShareButton, WhatsappIcon } from 'react-share';

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
  IoHeartSharp,
  IoArrowForwardOutline,
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
  DirectionButton,
} from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { getItemFromLS, setItemFromLS } from '../../../utils';

import { fetchUploadedRecipeAction } from '../../../store/recipeInformation/actions';

export default function Recipe() {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const currentURL = window.location.href;

  // possible params (false if there is no param)
  const id = search.includes('id') && search.split('=').pop();
  const forkId = search.includes('forkID') && search.split('=').pop();
  const random = search.includes('random') && search.replace('?', '');

  const recipe = useSelector(state => state.recipeInformation.recipe);
  const recipeFork = useSelector(state => state.recipeInformation.recipeFork);
  const username = useSelector(state => state.user.user?.username);

  const [ingredients, setIngredients] = useState([]);
  const [servings, setServings] = useState(0);
  const [isFavoriteRecipe, setIsFavoriteRecipe] = useState(false);

  // page's initial position
  useEffect(() => window.scrollTo(0, 0), []);

  // dispatch the action to fetch the recipe
  useEffect(() => {
    if (forkId) return dispatch(fetchUploadedRecipeAction(forkId));

    if (!forkId) {
      dispatch(recipeInformationAction(id, random));
    }
  }, [dispatch, id, random, forkId]);

  useEffect(() => {
    if (recipe) {
      setIngredients(recipe.ingredients);
      setServings(recipe.servings);
      return;
    }

    if (recipeFork) {
      setIngredients(recipeFork.ingredients);
      setServings(recipeFork.servings);
      return;
    }
  }, [recipe, recipeFork]);

  function handleUpdateServings(newServings) {
    ingredients.forEach(ingredient => {
      ingredient.amount = (ingredient.amount * newServings) / servings;
    });

    setServings(newServings);
    return;
  }

  // check if the current recipe showing up in the page is a favorite one
  useEffect(() => {
    if (!recipe) return;

    const usersArr = getItemFromLS('users');

    const currentUser = usersArr.filter(user => user.username === username);

    const isFavorite = currentUser[0].favoriteRecipes?.some(
      userRec => userRec.id === recipe.id
    );

    setIsFavoriteRecipe(isFavorite);
  }, [recipe, username]);

  function handleFavoriteRecipe(recipe) {
    // favorite the recipe if it is not a favorite one yet
    if (!isFavoriteRecipe) {
      const usersArr = getItemFromLS('users');

      usersArr.map(user => {
        return user.username === username && user.favoriteRecipes.push(recipe);
      });

      setItemFromLS('users', usersArr);
      return setIsFavoriteRecipe(true);
    }

    // unfavorite if it is already a favorite one
    if (isFavoriteRecipe) {
      const usersArr = getItemFromLS('users');

      usersArr.map(user => {
        return (
          user.username === username &&
          user.favoriteRecipes?.map((rec, i) => {
            return rec.id === recipe.id && user.favoriteRecipes?.splice(i, 1);
          })
        );
      });

      setItemFromLS('users', usersArr);
      return setIsFavoriteRecipe(false);
    }
  }

  return (
    <Layout onlyBackButton>
      <Container>
        {recipe && (
          <>
            <section>
              <RecipeTitle>{recipe.title}</RecipeTitle>

              <RecipePhoto imageSrc={recipe.image}></RecipePhoto>

              <InfoContainer>
                <div id="interactions">
                  <WhatsappShareButton
                    title="Hey! Take a look at this recipe 😋"
                    url={currentURL}
                  >
                    <WhatsappIcon size={50} borderRadius={10} />
                  </WhatsappShareButton>
                  <FavoriteButton
                    onClick={() =>
                      handleFavoriteRecipe({
                        title: recipe.title,
                        image: recipe.image,
                        id: recipe.id,
                      })
                    }
                  >
                    {isFavoriteRecipe ? (
                      <IoHeartSharp size={26} color="#E31B23" />
                    ) : (
                      <IoHeartOutline size={26} />
                    )}
                  </FavoriteButton>
                </div>

                <div id="information">
                  <span>
                    <IoTimerOutline size={18} /> {recipe.cookingTime} min
                  </span>
                  <span>
                    <IoThumbsUpOutline size={18} /> {recipe.likes}
                    {recipe.likes === 1 ? ' like' : ' likes'}
                  </span>
                </div>
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

        {recipeFork && (
          <>
            <section>
              <RecipeTitle>{recipeFork.title}</RecipeTitle>

              <RecipePhoto imageSrc={recipeFork.image} />

              <InfoContainer>
                <div id="interactions">
                  <WhatsappShareButton
                    title="Hey! Take a look at this recipe 😋"
                    url={currentURL}
                  >
                    <WhatsappIcon size={50} borderRadius={10} />
                  </WhatsappShareButton>
                </div>

                <div id="information">
                  <span>
                    <IoTimerOutline size={18} /> {recipeFork.cookingTime} min
                  </span>
                </div>
              </InfoContainer>
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
              <Link to={`${recipeFork.sourceUrl}`} target="_blank">
                <DirectionButton>
                  Check directions <IoArrowForwardOutline size={26} />{' '}
                </DirectionButton>
              </Link>
            </section>
          </>
        )}
      </Container>
    </Layout>
  );
}
