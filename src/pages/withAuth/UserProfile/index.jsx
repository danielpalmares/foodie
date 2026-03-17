import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { activePageAction } from '../../../store/activePage';
import { clearRecipeInformation } from '../../../store/recipeInformation';
import { apiGetUser, apiGetUserRecipes, apiGetUploadsUrl } from '../../../services/foodie/api';

import Layout from '../../Layout';
import AppTitle from '../../../components/AppTitle';
import Spinner from '../../../components/Spinner';

import {
  IoArrowForwardOutline,
  IoCloudUploadOutline,
  IoRestaurantOutline,
} from 'react-icons/io5';

import {
  Container,
  ProfileHeader,
  Avatar,
  UserInfo,
  Stats,
  StatItem,
  RecipesSection,
  RecipesGrid,
  RecipeCard,
  RecipeImage,
  RecipeCardInfo,
  EmptyState,
  StatusBadge,
} from './styles';

function getStatus(uploadCount) {
  if (uploadCount >= 100) return 'Chef';
  if (uploadCount >= 75) return 'Pro';
  if (uploadCount >= 50) return 'Aspirant';
  if (uploadCount >= 25) return 'Amateur';
  return 'Beginner';
}

export default function UserProfile() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.user.user);

  const [profileUser, setProfileUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => { dispatch(activePageAction('friends')); }, [dispatch]);

  // Redirect to own profile if viewing self
  useEffect(() => {
    if (currentUser && username === currentUser.username) {
      history.replace('/profile');
    }
  }, [currentUser, username, history]);

  useEffect(() => {
    async function loadProfile() {
      try {
        setLoading(true);
        const { data: userData } = await apiGetUser(username);
        setProfileUser(userData);

        if (userData?.user_id) {
          const { data: userRecipes } = await apiGetUserRecipes(userData.user_id);
          setRecipes(Array.isArray(userRecipes) ? userRecipes : []);
        }
      } catch (err) {
        setError('User not found.');
      } finally {
        setLoading(false);
      }
    }
    if (username) loadProfile();
  }, [username]);

  const baseUrl = apiGetUploadsUrl().replace('/uploads', '');

  function handleRecipeClick(recipeId) {
    dispatch(clearRecipeInformation());
    history.push({ pathname: '/recipe', search: `?foodieId=${recipeId}` });
  }

  if (loading) {
    return (
      <Layout onlyBackButton>
        <Container><Spinner /></Container>
      </Layout>
    );
  }

  if (error || !profileUser) {
    return (
      <Layout onlyBackButton>
        <Container><EmptyState>{error || 'User not found.'}</EmptyState></Container>
      </Layout>
    );
  }

  const gender = profileUser.gender;
  const avatarSrc = `${process.env.PUBLIC_URL}avatars/${(gender === 'male' || gender === 1) ? 'man' : 'woman'}-1.png`;
  const userStatus = getStatus(recipes.length);

  return (
    <Layout onlyBackButton>
      <Container>
        <ProfileHeader>
          <Avatar src={avatarSrc} alt={profileUser.name} />
          <UserInfo>
            <h2>{profileUser.name}</h2>
            <span>@{profileUser.username}</span>
            {profileUser.biography && <p>{profileUser.biography}</p>}
          </UserInfo>
        </ProfileHeader>

        <Stats>
          <StatItem>
            <span className="value">{recipes.length}</span>
            <span className="label">Recipes</span>
          </StatItem>
          <StatItem>
            <StatusBadge>{userStatus}</StatusBadge>
            <span className="label">Status</span>
          </StatItem>
        </Stats>

        <RecipesSection>
          <AppTitle>
            <IoRestaurantOutline size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
            {profileUser.name}'s Recipes
          </AppTitle>

          {recipes.length === 0 && (
            <EmptyState>This user hasn't uploaded any recipes yet.</EmptyState>
          )}

          {recipes.length > 0 && (
            <RecipesGrid>
              {recipes.map(recipe => {
                const imgUrl = recipe.image?.url ? `${baseUrl}${recipe.image.url}` : null;
                return (
                  <RecipeCard key={recipe.recipe_id} onClick={() => handleRecipeClick(recipe.recipe_id)}>
                    <RecipeImage imageSrc={imgUrl} />
                    <RecipeCardInfo>
                      <h4>{recipe.title}</h4>
                    </RecipeCardInfo>
                  </RecipeCard>
                );
              })}
            </RecipesGrid>
          )}
        </RecipesSection>
      </Container>
    </Layout>
  );
}
