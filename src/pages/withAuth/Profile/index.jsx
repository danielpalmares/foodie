import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { useObserver } from '../../../hooks';
import { clearRecipeInformation } from '../../../store/recipeInformation/actions';
import { activePageAction } from '../../../store/activePage';
import {
  apiGetUserRecipes,
  apiGetUploadsUrl,
} from '../../../services/foodie/api';

import {
  instructorObserverOptions,
  speechTexts,
} from '../../../config/Profile';

import Layout from '../../Layout';
import AppTitle from '../../../components/AppTitle';
import SpeechBubble from '../../../components/SpeechBubble';

import {
  IoArrowForwardOutline,
  IoCloudUploadOutline,
  IoHeartOutline,
  IoTrophyOutline,
  IoTimerOutline,
  IoRestaurantOutline,
} from 'react-icons/io5';

import {
  Container,
  Stats,
  Avatar,
  UserNameContainer,
  RecipesSection,
  RecipesGrid,
  RecipeCard,
  RecipeImage,
  RecipeCardInfo,
  InstructionsContainer,
  EmptyState,
  ProfileHeader,
  StatCard,
  SectionHeader,
  ViewAllLink,
  StatusBadge,
  ProgressSection,
  ProgressLabel,
  ProgressBarTrack,
  ProgressBarFill,
} from './styles';

function getStatus(uploadCount) {
  if (uploadCount >= 100) return 'Chef';
  if (uploadCount >= 75) return 'Pro';
  if (uploadCount >= 50) return 'Aspirant';
  if (uploadCount >= 25) return 'Amateur';
  return 'Beginner';
}

const STATUS_THRESHOLDS = [
  { label: 'Beginner', min: 0 },
  { label: 'Amateur', min: 25 },
  { label: 'Aspirant', min: 50 },
  { label: 'Pro', min: 75 },
  { label: 'Chef', min: 100 },
];

function getProgress(uploadCount) {
  const idx = STATUS_THRESHOLDS.findIndex(s => s.label === getStatus(uploadCount));
  const current = STATUS_THRESHOLDS[idx];
  const next = STATUS_THRESHOLDS[idx + 1];
  if (!next) return { progress: 100, label: `${uploadCount} uploads`, nextLabel: null };
  const progress = Math.round(((uploadCount - current.min) / (next.min - current.min)) * 100);
  return { progress, label: `${uploadCount} / ${next.min} uploads`, nextLabel: next.label };
}

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user_id, username, name, gender, avatar } = useSelector(
    state => state.user.user,
  );

  const [myRecipes, setMyRecipes] = useState([]);
  const [userStatus, setUserStatus] = useState('Beginner');

  const favorites = JSON.parse(
    localStorage.getItem(`foodie_favorites_${user_id}`) || '[]',
  );

  const [setRef, visible] = useObserver(instructorObserverOptions);
  const [currentInstructor, setCurrentInstructor] = useState(1);
  const [currentText, setCurrentText] = useState(0);
  const [speechBubble, setSpeechBubble] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => {
    dispatch(activePageAction('profile'));
  }, [dispatch]);

  useEffect(() => {
    if (!user_id) return;
    apiGetUserRecipes(user_id)
      .then(({ data }) => {
        setMyRecipes(data || []);
        setUserStatus(getStatus((data || []).length));
      })
      .catch(() => setMyRecipes([]));
  }, [user_id]);

  useEffect(() => {
    if (visible) {
      setTimeout(() => setCurrentInstructor(2), 1000);
      setTimeout(() => setCurrentInstructor(3), 2000);
      setTimeout(() => setSpeechBubble(true), 2000);
      return;
    }
    setCurrentInstructor(1);
    setCurrentText(0);
    setSpeechBubble(false);
  }, [visible]);

  useEffect(() => {
    if (currentText === 1) setCurrentInstructor(4);
    if (currentText === 3) setCurrentInstructor(5);
    if (currentText === 4) setCurrentInstructor(3);
  }, [currentText]);

  function handleSpeechBubble() {
    speechTexts.length > currentText + 1
      ? setCurrentText(currentText + 1)
      : setSpeechBubble(false);
  }

  const baseUrl = apiGetUploadsUrl().replace('/uploads', '');

  function handleMyRecipe(recipeId) {
    dispatch(clearRecipeInformation());
    return history.push({
      pathname: '/recipe',
      search: `?foodieId=${recipeId}`,
    });
  }

  function handleFavoriteRecipe(id) {
    dispatch(clearRecipeInformation());
    return history.push({ pathname: '/recipe', search: `?foodieId=${id}` });
  }

  return (
    <Layout profileHeader>
      <Container>
        <ProfileHeader>
          <Avatar
            src={`${process.env.PUBLIC_URL}avatars/${gender === 'male' || gender === 1 ? 'man' : 'woman'}-${avatar}.png`}
            alt="My Avatar"
          />
          <UserNameContainer>
            <h2>{name}</h2>
            <span>@{username}</span>
            <Link to="/avatars" className="change-avatar">
              Change avatar
            </Link>
          </UserNameContainer>
        </ProfileHeader>

        <Stats>
          <StatCard>
            <IoCloudUploadOutline size={22} />
            <strong>{myRecipes.length}</strong>
            <span>Uploads</span>
          </StatCard>
          <StatCard>
            <IoHeartOutline size={22} />
            <strong>{favorites.length}</strong>
            <span>Favorites</span>
          </StatCard>
          <StatCard>
            <IoTrophyOutline size={22} />
            <StatusBadge>{userStatus}</StatusBadge>
            <span>Status</span>
          </StatCard>
        </Stats>

        {(() => {
          const { progress, label, nextLabel } = getProgress(myRecipes.length);
          return (
            <ProgressSection>
              <ProgressLabel>
                <span>{nextLabel ? `Progress to ${nextLabel}` : 'Max level reached 🏆'}</span>
                <strong>{label}</strong>
              </ProgressLabel>
              <ProgressBarTrack>
                <ProgressBarFill progress={progress} />
              </ProgressBarTrack>
            </ProgressSection>
          );
        })()}

        <RecipesSection>
          <SectionHeader>
            <AppTitle>
              <IoRestaurantOutline
                size={20}
                style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}
              />
              My Recipes
            </AppTitle>
            {myRecipes.length > 0 && (
              <span className="count">{myRecipes.length} recipes</span>
            )}
          </SectionHeader>

          {myRecipes.length === 0 && (
            <EmptyState>
              You haven't uploaded any recipes yet.
              <Link to="/upload">
                Upload your first recipe <IoArrowForwardOutline size={14} />
              </Link>
            </EmptyState>
          )}

          {myRecipes.length > 0 && (
            <RecipesGrid>
              {myRecipes.map(recipe => {
                const imgUrl = recipe.image?.url
                  ? `${baseUrl}${recipe.image.url}`
                  : null;
                return (
                  <RecipeCard
                    key={recipe.recipe_id}
                    onClick={() => handleMyRecipe(recipe.recipe_id)}
                  >
                    <RecipeImage imageSrc={imgUrl} />
                    <RecipeCardInfo>
                      <h4>{recipe.title}</h4>
                      {recipe.ready_in_minutes && (
                        <span>
                          <IoTimerOutline size={12} /> {recipe.ready_in_minutes}{' '}
                          min
                        </span>
                      )}
                    </RecipeCardInfo>
                  </RecipeCard>
                );
              })}
            </RecipesGrid>
          )}
        </RecipesSection>

        {favorites.length > 0 && (
          <RecipesSection>
            <SectionHeader>
              <AppTitle>
                <IoHeartOutline
                  size={20}
                  style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}
                />
                Favorites
              </AppTitle>
            </SectionHeader>

            <RecipesGrid>
              {favorites.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  onClick={() => handleFavoriteRecipe(recipe.id)}
                >
                  <RecipeImage imageSrc={recipe.image} />
                  <RecipeCardInfo>
                    <h4>{recipe.title}</h4>
                  </RecipeCardInfo>
                </RecipeCard>
              ))}
            </RecipesGrid>
          </RecipesSection>
        )}

        <InstructionsContainer>
          <Link to="/avatars">
            <img
              src={`${process.env.PUBLIC_URL}avatars/instructor-${currentInstructor}.png`}
              alt="Instructor"
              ref={setRef}
            />
          </Link>

          <SpeechBubble active={speechBubble} handleClick={handleSpeechBubble}>
            {speechTexts[currentText]}
          </SpeechBubble>
        </InstructionsContainer>
      </Container>
    </Layout>
  );
}
