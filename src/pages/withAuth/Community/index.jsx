import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { activePageAction } from '../../../store/activePage';
import { clearRecipeInformation } from '../../../store/recipeInformation';
import { apiGetAllRecipes, apiGetUploadsUrl } from '../../../services/foodie/api';

import Layout from '../../Layout';
import AppTitle from '../../../components/AppTitle';
import Spinner from '../../../components/Spinner';

import {
  IoTimerOutline,
  IoPeopleOutline,
  IoHeartOutline,
  IoHeartSharp,
  IoShareSocialOutline,
  IoBookmarkOutline,
  IoBookmarkSharp,
  IoRestaurantOutline,
} from 'react-icons/io5';

import {
  Container,
  Feed,
  PostCard,
  PostImage,
  PostActions,
  ActionButton,
  PostInfo,
  PostMeta,
  EmptyState,
  FeedHeader,
} from './styles';

export default function Community() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});

  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => { dispatch(activePageAction('community')); }, [dispatch]);

  useEffect(() => {
    async function loadRecipes() {
      try {
        setLoading(true);
        const { data } = await apiGetAllRecipes();
        setRecipes(Array.isArray(data) ? data : []);
      } catch (err) {
        setError('Could not load community recipes.');
      } finally {
        setLoading(false);
      }
    }
    loadRecipes();
  }, []);

  function handleRecipe(recipeId) {
    dispatch(clearRecipeInformation());
    return history.push({ pathname: '/recipe', search: `?foodieId=${recipeId}` });
  }

  function toggleLike(recipeId) {
    setLikedPosts(prev => ({ ...prev, [recipeId]: !prev[recipeId] }));
  }

  function toggleSave(recipeId) {
    setSavedPosts(prev => ({ ...prev, [recipeId]: !prev[recipeId] }));
  }

  const baseUrl = apiGetUploadsUrl().replace('/uploads', '');

  return (
    <Layout defaultHeader>
      <Container>
        <FeedHeader>
          <AppTitle>
            <IoRestaurantOutline size={24} style={{ verticalAlign: 'middle', marginRight: '0.8rem' }} />
            Community Feed
          </AppTitle>
          <p>Discover recipes from the community</p>
        </FeedHeader>

        {loading && <Spinner />}
        {error && <EmptyState>{error}</EmptyState>}

        {!loading && !error && recipes.length === 0 && (
          <EmptyState>No community recipes yet. Be the first to upload one!</EmptyState>
        )}

        {!loading && recipes.length > 0 && (
          <Feed>
            {recipes.map(recipe => {
              const imageUrl = recipe.image?.url ? `${baseUrl}${recipe.image.url}` : null;
              const isLiked = likedPosts[recipe.recipe_id];
              const isSaved = savedPosts[recipe.recipe_id];

              return (
                <PostCard key={recipe.recipe_id}>
                  <PostImage
                    imageSrc={imageUrl}
                    onClick={() => handleRecipe(recipe.recipe_id)}
                  />

                  <PostActions>
                    <div className="left">
                      <ActionButton onClick={() => toggleLike(recipe.recipe_id)} isActive={isLiked}>
                        {isLiked ? <IoHeartSharp size={24} /> : <IoHeartOutline size={24} />}
                      </ActionButton>
                      <ActionButton>
                        <IoShareSocialOutline size={22} />
                      </ActionButton>
                    </div>
                    <ActionButton onClick={() => toggleSave(recipe.recipe_id)} isActive={isSaved}>
                      {isSaved ? <IoBookmarkSharp size={22} /> : <IoBookmarkOutline size={22} />}
                    </ActionButton>
                  </PostActions>

                  <PostInfo onClick={() => handleRecipe(recipe.recipe_id)}>
                    <h3>{recipe.title}</h3>
                    <PostMeta>
                      <span><IoTimerOutline size={14} /> {recipe.ready_in_minutes} min</span>
                      <span><IoPeopleOutline size={14} /> {recipe.servings} servings</span>
                    </PostMeta>
                  </PostInfo>
                </PostCard>
              );
            })}
          </Feed>
        )}
      </Container>
    </Layout>
  );
}
