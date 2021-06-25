import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { useObserver } from '../../../hooks';

import { clearRecipeInformation } from '../../../store/recipeInformation/actions';
import { activePageAction } from '../../../store/activePage';

import { getItemFromLS } from '../../../utils';

import {
  instructorObserverOptions,
  speechTexts,
} from '../../../config/Profile';

import Layout from '../../Layout';
import progressBar from '../../../assets/timelineBar.png';
import AppRecipeCard from '../../../components/AppRecipeCard';
import AppTitle from '../../../components/AppTitle';
import SpeechBubble from '../../../components/SpeechBubble';
import NoRecipeCard from '../../../components/NoRecipeCard';

import { IoArrowForwardOutline, IoCloudUploadOutline } from 'react-icons/io5';

import {
  Container,
  Stats,
  ProgressContainer,
  Marker,
  LevelList,
  BarContainer,
  Avatar,
  UserNameContainer,
  SwipeDirection,
  MyRecipesList,
  InstructionsContainer,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();

  // current user account information
  const { username, name, gender, avatar } = useSelector(
    state => state.user.user
  );

  // users list in the localStorage
  const usersArr = getItemFromLS('users');

  // current user from localStorage
  const [currentUser] = usersArr.filter(user => user.username === username);

  // user's favorite recipes
  const userFavoriteRecipes =
    currentUser.favoriteRecipes.length === 0
      ? null
      : currentUser.favoriteRecipes;

  // user's uploaded recipes
  const userUploadedRecipes =
    currentUser.myRecipes.length === 0 ? null : currentUser.myRecipes;

  // setting up the observer
  const [setRef, visible] = useObserver(instructorObserverOptions);

  // states for stats
  const [userUploads, setUserUploads] = useState(0);
  const [userLikes, setUserLikes] = useState(0);
  const [userStatus, setUserStatus] = useState('');

  // states for the speech bubble
  const [currentInstructor, setCurrentInstructor] = useState(1);
  const [currentText, setCurrentText] = useState(0);
  const [speechBubble, setSpeechBubble] = useState(false);

  // page's initial position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // set page as active
  useEffect(() => dispatch(activePageAction('profile')));

  // setting up the stats when the page is rendered
  useEffect(() => {
    const upLength = currentUser.myRecipes.length;

    const status = () => {
      let status;

      if (upLength >= 0 && upLength < 24) status = 'Beginner';
      if (upLength >= 25 && upLength < 49) status = 'Amateur';
      if (upLength >= 50 && upLength < 74) status = 'Aspirant';
      if (upLength >= 75 && upLength < 99) status = 'Pro';
      if (upLength >= 100) status = 'Chef';

      return status;
    };

    setUserUploads(upLength);
    setUserLikes(currentUser.favoriteRecipes.length);
    setUserStatus(status());
  }, [currentUser]);

  // setting up the instruction animation
  useEffect(() => {
    if (visible) {
      // animation starts
      setTimeout(() => setCurrentInstructor(2), 1 * 1000);
      setTimeout(() => setCurrentInstructor(3), 2 * 1000);
      setTimeout(() => setSpeechBubble(true), 2 * 1000);

      return;
    }
    // reset
    setCurrentInstructor(1);
    setCurrentText(0);
    setSpeechBubble(false);
  }, [visible]);

  // once the speech bubble is rendered, set which instructor show up when clicking in the speech bubble
  useEffect(() => {
    currentText === 1 && setCurrentInstructor(4);
    currentText === 3 && setCurrentInstructor(5);
    currentText === 4 && setCurrentInstructor(3);
  }, [currentText]);

  // get next speech when clicking in the speech bubble
  function handleSpeechBubble() {
    speechTexts.length > currentText + 1
      ? setCurrentText(currentText + 1) // next speech
      : setSpeechBubble(false); // make the speech bubble disappear when there are no speech

    return;
  }

  // show recipe information in the recipe page
  function handleMyRecipe(id) {
    dispatch(clearRecipeInformation());

    return history.push({
      pathname: '/recipe',
      search: `?forkID=${id}`,
    });
  }

  // show recipe information in the recipe page
  function handleFavoriteRecipe(id) {
    dispatch(clearRecipeInformation());

    return history.push({
      pathname: '/recipe',
      search: `?id=${id}`,
    });
  }

  return (
    <Layout profileHeader>
      <Container>
        <header>
          <Avatar
            src={`${process.env.PUBLIC_URL}avatars/${
              gender === 'male' ? 'man' : 'woman'
            }-${avatar}.png`}
            alt="My Avatar"
          />
          <UserNameContainer>
            <h3>{name}</h3>
            <span>{`@${username}`}</span>
          </UserNameContainer>
        </header>

        <section>
          <Stats>
            <ul>
              <li>
                <p>Uploads</p>
                <span>{userUploads}</span>
              </li>
              <li>
                <p>Liked</p>
                <span>{userLikes}</span>
              </li>
              <li>
                <p>Status</p>
                <span>{userStatus}</span>
              </li>
            </ul>
          </Stats>
        </section>

        <section>
          <ProgressContainer>
            <section>
              <BarContainer>
                <img src={progressBar} alt="Progress Bar" />
                <Marker
                  src={`${process.env.PUBLIC_URL}avatars/${
                    gender === 'male' ? 'man' : 'woman'
                  }-${avatar}.png`}
                  position={currentUser.myRecipes.length}
                  alt="Marker"
                />
                <ul>
                  <li id="beginner-bar"></li>
                  <li id="amateur-bar"></li>
                  <li id="aspirant-bar"></li>
                  <li id="pro-bar"></li>
                  <li id="chef-bar"></li>
                </ul>
              </BarContainer>

              <LevelList>
                <li id="beginner">
                  Beginner
                  <span>
                    0 <IoCloudUploadOutline size={18} />
                  </span>
                </li>

                <li id="amateur">
                  Amateur
                  <span>
                    25 <IoCloudUploadOutline size={18} />
                  </span>
                </li>
                <li id="aspirant">
                  Aspirant
                  <span>
                    50 <IoCloudUploadOutline size={18} />
                  </span>
                </li>
                <li id="pro">
                  Pro
                  <span>
                    75 <IoCloudUploadOutline size={18} />
                  </span>
                </li>
                <li id="chef">
                  Chef
                  <span>
                    100 <IoCloudUploadOutline size={18} />
                  </span>
                </li>
              </LevelList>
            </section>
          </ProgressContainer>

          <SwipeDirection>
            <span>
              Swipe to see your journey <IoArrowForwardOutline size={16} />
            </span>
          </SwipeDirection>
        </section>

        <section>
          <AppTitle>My recipes</AppTitle>
          <MyRecipesList>
            {userUploadedRecipes &&
              userUploadedRecipes.map(recipe => {
                return (
                  <AppRecipeCard
                    key={recipe.id}
                    title={recipe.title}
                    imageSrc={recipe.image}
                    handleRecipe={() => handleMyRecipe(recipe.id)}
                  />
                );
              })}
            {!userUploadedRecipes && (
              <NoRecipeCard message="You haven't uploaded any recipe yet" />
            )}
          </MyRecipesList>

          {userUploadedRecipes && (
            <SwipeDirection>
              <span>
                Swipe to see your recipes <IoArrowForwardOutline size={16} />
              </span>
            </SwipeDirection>
          )}
        </section>

        <section>
          <AppTitle>My favorite recipes</AppTitle>
          <MyRecipesList>
            {userFavoriteRecipes &&
              userFavoriteRecipes.map(recipe => {
                return (
                  <AppRecipeCard
                    key={recipe.id}
                    title={recipe.title}
                    imageSrc={recipe.image}
                    handleRecipe={() => handleFavoriteRecipe(recipe.id)}
                  />
                );
              })}
            {!userFavoriteRecipes && (
              <NoRecipeCard message="You haven't favorited any recipe yet" />
            )}
          </MyRecipesList>

          {userFavoriteRecipes && (
            <SwipeDirection>
              <span>
                Swipe to see your favorite recipes{' '}
                <IoArrowForwardOutline size={16} />
              </span>
            </SwipeDirection>
          )}
        </section>

        <InstructionsContainer>
          <Link to="/avatars">
            <img
              src={`${process.env.PUBLIC_URL}avatars/instructor-${currentInstructor}.png`}
              alt="Instructor"
              ref={setRef}
            />
          </Link>

          <SpeechBubble
            active={speechBubble}
            handleClick={() => handleSpeechBubble()}
          >
            {speechTexts[currentText]}
          </SpeechBubble>
        </InstructionsContainer>
      </Container>
    </Layout>
  );
}
