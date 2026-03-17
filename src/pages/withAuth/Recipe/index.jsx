import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  WhatsappShareButton, WhatsappIcon,
  TelegramShareButton, TelegramIcon,
} from 'react-share';

import Layout from '../../Layout';
import AppTitle from '../../../components/AppTitle';
import Spinner from '../../../components/Spinner';
import { recipeInformationAction, clearRecipeInformation, fetchUploadedRecipeAction } from '../../../store/recipeInformation';
import { getFractional } from '../../../utils';

import {
  IoAddOutline, IoRemoveOutline, IoHeartOutline, IoTimerOutline,
  IoHeartSharp, IoPeopleOutline,
} from 'react-icons/io5';

import {
  Container, RecipeTitle, RecipePhoto, FavoriteButton,
  InfoContainer, IngredientsHeader, ChangeIngredients,
  IngredientsList, StepContainer, ShareSection, RecipeHero,
  MetaBadge, MetaRow,
} from './styles';

export default function Recipe() {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const currentURL = window.location.href;

  const id = search.includes('?id=') && new URLSearchParams(search).get('id');
  const foodieId = search.includes('foodieId=') && new URLSearchParams(search).get('foodieId');
  const random = search.includes('random') && search.replace('?', '');

  const recipeFromApi = useSelector(state => state.recipeInformation.recipe);
  const recipeFork = useSelector(state => state.recipeInformation.recipeFork);
  const userId = useSelector(state => state.user.user?.user_id);

  // Use whichever is available
  const recipe = recipeFromApi || recipeFork;

  const [ingredients, setIngredients] = useState([]);
  const [servings, setServings] = useState(0);
  const [isFavoriteRecipe, setIsFavoriteRecipe] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    setLoading(true);
    if (foodieId) {
      dispatch(fetchUploadedRecipeAction(foodieId));
    } else {
      dispatch(recipeInformationAction(id, random));
    }
  }, [dispatch, id, random, foodieId]);

  useEffect(() => {
    if (recipe) {
      setIngredients(recipe.ingredients || []);
      setServings(recipe.servings || 0);
      setLoading(false);
    }
  }, [recipe]);

  function handleUpdateServings(newServings) {
    if (newServings < 1 || servings === 0) return;
    const ratio = newServings / servings;
    setIngredients(prev => prev.map(ing => ({
      ...ing,
      amount: ing.amount * ratio,
    })));
    setServings(newServings);
  }

  // Favorites
  useEffect(() => {
    if (!recipe || !userId) return;
    const favKey = `foodie_favorites_${userId}`;
    const favorites = JSON.parse(localStorage.getItem(favKey) || '[]');
    const recipeId = recipe.id || recipe.recipe_id;
    const isFavorite = favorites.some(r => (r.id || r.recipe_id) === recipeId);
    setIsFavoriteRecipe(isFavorite);
  }, [recipe, userId]);

  function handleFavoriteRecipe() {
    if (!recipe) return;
    const favKey = `foodie_favorites_${userId}`;
    const favorites = JSON.parse(localStorage.getItem(favKey) || '[]');
    const recipeId = recipe.id || recipe.recipe_id;

    if (!isFavoriteRecipe) {
      favorites.push({
        id: recipeId,
        title: recipe.title,
        image: recipe.image,
      });
      localStorage.setItem(favKey, JSON.stringify(favorites));
      return setIsFavoriteRecipe(true);
    }

    const updated = favorites.filter(r => (r.id || r.recipe_id) !== recipeId);
    localStorage.setItem(favKey, JSON.stringify(updated));
    return setIsFavoriteRecipe(false);
  }

  if (loading && !recipe) {
    return (
      <Layout onlyBackButton>
        <Container><Spinner /></Container>
      </Layout>
    );
  }

  if (!recipe) {
    return (
      <Layout onlyBackButton>
        <Container><p style={{ textAlign: 'center', padding: '4rem 0' }}>Recipe not found.</p></Container>
      </Layout>
    );
  }

  return (
    <Layout onlyBackButton>
      <Container>
        <RecipeHero>
          <RecipeTitle>{recipe.title}</RecipeTitle>
          <MetaRow>
            <MetaBadge>
              <IoTimerOutline size={16} /> {recipe.cookingTime || recipe.ready_in_minutes} min
            </MetaBadge>
            <MetaBadge>
              <IoPeopleOutline size={16} /> {recipe.servings} servings
            </MetaBadge>
          </MetaRow>
        </RecipeHero>

        <RecipePhoto imageSrc={recipe.image} />

        <InfoContainer>
          <ShareSection>
            <div className="share-buttons">
              <WhatsappShareButton title="Check out this recipe!" url={currentURL}>
                <WhatsappIcon size={42} borderRadius={12} />
              </WhatsappShareButton>
              <TelegramShareButton title="Check out this recipe!" url={currentURL}>
                <TelegramIcon size={42} borderRadius={12} />
              </TelegramShareButton>
            </div>
            <FavoriteButton onClick={handleFavoriteRecipe}>
              {isFavoriteRecipe ? (
                <IoHeartSharp size={24} color="#E31B23" />
              ) : (
                <IoHeartOutline size={24} />
              )}
            </FavoriteButton>
          </ShareSection>
        </InfoContainer>

        <section>
          <IngredientsHeader>
            <AppTitle>Ingredients</AppTitle>
            <ChangeIngredients>
              <span>{servings} {servings === 1 ? 'serving' : 'servings'}</span>
              <button
                className={servings <= 1 ? 'inactive' : ''}
                onClick={() => servings > 1 && handleUpdateServings(servings - 1)}
              >
                <IoRemoveOutline size={14} />
              </button>
              <button onClick={() => handleUpdateServings(servings + 1)}>
                <IoAddOutline size={14} />
              </button>
            </ChangeIngredients>
          </IngredientsHeader>

          <IngredientsList>
            {ingredients.map((ingredient, i) => (
              <li key={i}>
                <span>{ingredient.name}</span>
                <strong>{getFractional(ingredient.amount)} {ingredient.unit}</strong>
              </li>
            ))}
          </IngredientsList>
        </section>

        {recipe.instructions && recipe.instructions.length > 0 && (
          <section>
            <AppTitle>How to cook</AppTitle>
            {recipe.instructions.map((step, i) => (
              <StepContainer key={i}>
                <span>Step {step.number || step.step_number || i + 1}</span>
                <p>{step.step}</p>
              </StepContainer>
            ))}
          </section>
        )}
      </Container>
    </Layout>
  );
}
