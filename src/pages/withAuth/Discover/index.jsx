import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useGreeting } from '../../../hooks';
import { getSingleStringFromInput } from '../../../utils';
import { clearResultsRecipesAction } from '../../../store/resultsRecipes';
import { clearRecipeInformation } from '../../../store/recipeInformation';
import { activePageAction } from '../../../store/activePage';
import { apiGetAllRecipes, apiGetUploadsUrl } from '../../../services/foodie/api';

import Layout from '../../../pages/Layout';
import AppTitle from '../../../components/AppTitle';
import InputSearch from '../../../components/InputSearch';
import RandomRecipeCard from '../../../components/RandomRecipeCard';
import FindRecipesCard from '../../../components/FindRecipesCard';
import Spinner from '../../../components/Spinner';

import dietSvg from '../../../assets/diet.svg';
import chefSvg from '../../../assets/chef.svg';
import tutorialSvg from '../../../assets/tutorial.svg';

import {
  IoTimerOutline,
  IoArrowForwardOutline,
  IoFlameOutline,
  IoRestaurantOutline,
} from 'react-icons/io5';

import {
  Container,
  HeroSection,
  FeaturedSection,
  FeaturedScroll,
  FeaturedCard,
  FeaturedImage,
  FeaturedInfo,
  QuickActions,
  CommunityGrid,
  CommunityCard,
  CommunityImage,
  CommunityInfo,
  SectionHeader,
  ViewAllLink,
} from './styles';

export default function Discover() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [greeting] = useGreeting();
  const { user } = useSelector(state => state.user);
  const [inputData, setInputData] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => { dispatch(activePageAction('discover')); }, [dispatch]);

  useEffect(() => {
    apiGetAllRecipes()
      .then(({ data }) => setRecipes(Array.isArray(data) ? data : []))
      .catch(() => setRecipes([]))
      .finally(() => setLoading(false));
  }, []);

  const baseUrl = apiGetUploadsUrl().replace('/uploads', '');

  function handleRecipesByName() {
    const recipeName = getSingleStringFromInput(inputData);
    if (!recipeName) return;
    dispatch(clearResultsRecipesAction());
    return history.push({ pathname: '/results', search: `?query=${recipeName}` });
  }

  function handleRandomRecipe() {
    dispatch(clearRecipeInformation());
    return history.push({ pathname: '/recipe', search: 'random' });
  }

  function handleRecipeClick(recipeId) {
    dispatch(clearRecipeInformation());
    return history.push({ pathname: '/recipe', search: `?foodieId=${recipeId}` });
  }

  const featuredRecipes = recipes.slice(0, 8);
  const communityRecipes = recipes.slice(0, 4);

  return (
    <Layout defaultHeader>
      <Container>
        <HeroSection>
          <div className="hero-text">
            <h1>{greeting} {user.name} <IoFlameOutline /></h1>
            <p>What would you like to cook today?</p>
          </div>

          <InputSearch
            handleInputChange={e => setInputData(e.target.value)}
            handleSearch={() => handleRecipesByName()}
            placeholder="Search for a recipe..."
          />
        </HeroSection>

        {!loading && featuredRecipes.length > 0 && (
          <FeaturedSection>
            <SectionHeader>
              <AppTitle>
                <IoRestaurantOutline size={22} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                Featured Recipes
              </AppTitle>
            </SectionHeader>

            <FeaturedScroll>
              {featuredRecipes.map(recipe => {
                const imgUrl = recipe.image?.url ? `${baseUrl}${recipe.image.url}` : null;
                return (
                  <FeaturedCard key={recipe.recipe_id} onClick={() => handleRecipeClick(recipe.recipe_id)}>
                    <FeaturedImage imageSrc={imgUrl} />
                    <FeaturedInfo>
                      <h4>{recipe.title}</h4>
                      <span><IoTimerOutline size={14} /> {recipe.ready_in_minutes} min</span>
                    </FeaturedInfo>
                  </FeaturedCard>
                );
              })}
            </FeaturedScroll>
          </FeaturedSection>
        )}

        {loading && <Spinner />}

        <section>
          <AppTitle>Quick Actions</AppTitle>
          <QuickActions>
            <FindRecipesCard
              image={dietSvg}
              direction="/search"
              text="Find recipes based on what you already have"
            />
            <FindRecipesCard
              image={chefSvg}
              direction="/upload"
              text="Upload your own recipes and build your progress"
            />
            <FindRecipesCard
              image={tutorialSvg}
              direction="/tutorials"
              text="Watch cooking tutorials anytime, anywhere"
            />
          </QuickActions>
        </section>

        <section>
          <AppTitle>Feeling lucky?</AppTitle>
          <RandomRecipeCard handleRandom={() => handleRandomRecipe()} />
        </section>

        {!loading && communityRecipes.length > 0 && (
          <section>
            <SectionHeader>
              <AppTitle>From the Community</AppTitle>
              <ViewAllLink onClick={() => history.push('/community')}>
                View all <IoArrowForwardOutline size={16} />
              </ViewAllLink>
            </SectionHeader>

            <CommunityGrid>
              {communityRecipes.map(recipe => {
                const imgUrl = recipe.image?.url ? `${baseUrl}${recipe.image.url}` : null;
                return (
                  <CommunityCard key={recipe.recipe_id} onClick={() => handleRecipeClick(recipe.recipe_id)}>
                    <CommunityImage imageSrc={imgUrl} />
                    <CommunityInfo>
                      <h4>{recipe.title}</h4>
                      <span><IoTimerOutline size={12} /> {recipe.ready_in_minutes} min</span>
                    </CommunityInfo>
                  </CommunityCard>
                );
              })}
            </CommunityGrid>
          </section>
        )}
      </Container>
    </Layout>
  );
}
