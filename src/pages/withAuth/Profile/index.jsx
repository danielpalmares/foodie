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
  Wrapper,
  Avatar,
  UserNameContainer,
  SwipeDirection,
  MyRecipesList,
  InstructionsContainer,
} from './styles';

export default function Profile() {
  // setting up the observer
  const [setRef, visible] = useObserver(instructorObserverOptions);

  // states area
  const [currentInstructor, setCurrentInstructor] = useState(1);
  const [currentText, setCurrentText] = useState(0);
  const [speechBubble, setSpeechBubble] = useState(false);

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

  return (
    <Layout profileHeader>
      <Container>
        <header>
          <Avatar
            src={process.env.PUBLIC_URL + '/images/woman-1.png'}
            alt="My Avatar"
          />
        </header>

        <Wrapper>
          <section>
            <UserNameContainer>
              <h3>Daniel Palmares</h3>
              <span>@danfpl</span>
            </UserNameContainer>

            <Stats>
              <ul>
                <li>
                  <p>Uploads</p>
                  <span>12</span>
                </li>
                <li>
                  <p>Liked</p>
                  <span>20</span>
                </li>
                <li>
                  <p>Points</p>
                  <span>200</span>
                </li>
                <li>
                  <p>Status</p>
                  <span>Chief</span>
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
                    src={process.env.PUBLIC_URL + '/images/woman-1.png'}
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
                      10 <IoCloudUploadOutline size={18} />
                    </span>
                  </li>
                  <li id="aspirant">
                    Aspirant
                    <span>
                      25 <IoCloudUploadOutline size={18} />
                    </span>
                  </li>
                  <li id="pro">
                    Pro
                    <span>
                      50 <IoCloudUploadOutline size={18} />
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
        </Wrapper>
      </Container>
    </Layout>
  );
}
