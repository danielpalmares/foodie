import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '../../Layout';
import AppTitle from '../../../components/AppTitle';

import { recipeInformationAction } from '../../../store/recipeInformation';

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

export default function Recipe() {
  const { search } = useLocation();
  const id = search.split('=').pop();

  console.log(id);

  useEffect(() => {
    recipeInformationAction(id);
  });

  return (
    <Layout onlyBackButton>
      <Container>
        <section>
          <RecipeTitle>Torta de Maçã</RecipeTitle>

          <RecipePhoto imageSrc="https://img.itdg.com.br/tdg/images/recipes/000/121/412/177581/177581_original.jpg?mode=crop&width=710&height=400">
            <FavoriteButton>
              <IoHeartOutline size={26} />
            </FavoriteButton>
          </RecipePhoto>

          <InfoContainer>
            <span>
              <IoTimerOutline size={18} /> 10 min
            </span>
            <span>
              <IoThumbsUpOutline size={18} /> 12 likes
            </span>
          </InfoContainer>

          <BadgeContainer>
            <Badge>Dairy Free</Badge>
            <Badge>Gluten Free</Badge>
            <Badge>100% Healthy</Badge>
          </BadgeContainer>
        </section>

        <section>
          <IngredientsHeader>
            <AppTitle>Ingredients</AppTitle>
            <ChangeIngredients>
              <span>2 servings</span>
              <button>
                <IoRemoveOutline size={14} />
              </button>
              <button>
                <IoAddOutline size={14} />
              </button>
            </ChangeIngredients>
          </IngredientsHeader>

          <IngredientsList>
            <li>
              <span>Long bread</span>
              <strong>4 slices</strong>
            </li>
          </IngredientsList>
        </section>

        <section>
          <AppTitle>How to cook</AppTitle>
          <StepContainer>
            <span>Step 1</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              voluptate atque unde cumque fugiat corporis nisi exercitationem
              sapiente amet, provident eos voluptatibus, id repellat maiores
              tempore ab labore ex ullam?
            </p>
          </StepContainer>
        </section>
      </Container>
    </Layout>
  );
}
