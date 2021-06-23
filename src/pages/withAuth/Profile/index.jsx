import React, { useState, useEffect } from 'react';
import { useObserver } from '../../../hooks';
import {
  instructorObserverOptions,
  speechTexts,
} from '../../../config/Profile';

import Layout from '../../Layout';
import progressBar from '../../../assets/timelineBar.png';
import RecipeCard from '../../../components/AppRecipeCard';
import AppTitle from '../../../components/AppTitle';
import SpeechBubble from '../../../components/SpeechBubble';

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

import { useDispatch, useSelector } from 'react-redux';
import { activePageAction } from '../../../store/activePage';

import { getItemFromLS, setItemFromLS } from '../../../utils';

export default function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // user account information
  const { username, name, gender } = useSelector(state => state.user.user);

  const favoriteRecipes = getItemFromLS('favoriteRecipes');
  const recipeUploads = getItemFromLS('myRecipes');
  const uploadsFiltered = recipeUploads.filter(
    recipe => recipe.publisher === username
  );

  // stats
  const [userUploads, setUserUploads] = useState(0);
  const [userLikes, setUserLikes] = useState(0);
  const [userStatus, setUserStatus] = useState('');

  useEffect(() => {
    const upLength = uploadsFiltered.length;

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
    setUserLikes(favoriteRecipes.length);
    setUserStatus(status());
  }, [uploadsFiltered, favoriteRecipes]);

  const dispatch = useDispatch();

  useEffect(() => dispatch(activePageAction('profile')));

  // setting up the observer
  const [setRef, visible] = useObserver(instructorObserverOptions);

  // states area
  const [currentInstructor, setCurrentInstructor] = useState(1);
  const [currentText, setCurrentText] = useState(0);
  const [speechBubble, setSpeechBubble] = useState(false);
  const [myAvatar, setMyAvatar] = useState(3);

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

    return;
  }, [visible]);

  // once the speech bubble is rendered, set which instructor show up when clicking in the speech bubble
  useEffect(() => {
    currentText === 1 && setCurrentInstructor(4);
    currentText === 3 && setCurrentInstructor(5);
    currentText === 4 && setCurrentInstructor(3);

    return;
  }, [currentText]);

  // get next speech when clicking in the speech bubble
  function handleSpeechBubble() {
    speechTexts.length > currentText + 1
      ? setCurrentText(currentText + 1) // next speech
      : setSpeechBubble(false); // make the speech bubble disappear when there are no speech

    return;
  }

  function handleMyRecipe(id) {
    console.log(id);
    // show info in other page
  }

  return (
    <Layout profileHeader>
      <Container>
        <header>
          <Avatar
            src={`${process.env.PUBLIC_URL}images/${
              gender === 'male' ? 'man' : 'woman'
            }-${myAvatar}.png`}
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
                  src={`${process.env.PUBLIC_URL}images/${
                    gender === 'male' ? 'man' : 'woman'
                  }-${myAvatar}.png`}
                  position={uploadsFiltered.length}
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
            {uploadsFiltered !== [] &&
              uploadsFiltered.map(recipe => {
                return (
                  <RecipeCard
                    title={recipe.title}
                    imageSrc={recipe.image}
                    handleRecipe={() => handleMyRecipe(recipe.id)}
                  />
                );
              })}
          </MyRecipesList>

          <SwipeDirection>
            <span>
              Swipe to see your recipes <IoArrowForwardOutline size={16} />
            </span>
          </SwipeDirection>
        </section>

        <section>
          <AppTitle>My favorite recipes</AppTitle>
          <MyRecipesList>
            <RecipeCard
              title="A melhor pizza do brasil"
              imageSrc={process.env.PUBLIC_URL + '/images/british.jpg'}
            />
            <RecipeCard
              title="A melhor pizza do brasil"
              imageSrc={process.env.PUBLIC_URL + '/images/british.jpg'}
            />
            <RecipeCard
              title="A melhor pizza do brasil"
              imageSrc={process.env.PUBLIC_URL + '/images/british.jpg'}
            />
            <RecipeCard
              title="A melhor pizza do brasil"
              imageSrc={process.env.PUBLIC_URL + '/images/british.jpg'}
            />
          </MyRecipesList>

          <SwipeDirection>
            <span>
              Swipe to see your favorite recipes{' '}
              <IoArrowForwardOutline size={16} />
            </span>
          </SwipeDirection>
        </section>

        <InstructionsContainer>
          <img
            src={
              process.env.PUBLIC_URL +
              `/avatars/instructor-${currentInstructor}.png`
            }
            alt="Instructor"
            style={{ height: '100px' }}
            ref={setRef}
          />
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
