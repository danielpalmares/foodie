import React, { useState, useRef, useEffect, useCallback } from 'react';
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
} from './styles';
import progressBar from '../../../assets/timelineBar.png';

import Layout from '../../Layout';

import AppTitle from '../../../components/AppTitle';
import RecipesGrid from '../../../components/RecipesGrid';
import RecipeCard from '../../../components/AppRecipeCard';

import {
  IoArrowForwardOutline,
  IoCloudUploadOutline,
  IoMaleOutline,
} from 'react-icons/io5';

import { useIntersecting } from '../../../hooks';

export default function Profile() {
  const [containerRef, visible] = useIntersecting({
    root: null,
    rootMargin: '0px 0px -60px 0px', // navigation's height
    threshold: 1.0,
  });

  console.log(visible);

  return (
    <Layout profileHeader>
      <Container>
        <header>
          <Avatar
            src={process.env.PUBLIC_URL + '/images/woman-1.png'}
            alt="Avatar"
          />
        </header>

        <Wrapper>
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

          <img
            src={process.env.PUBLIC_URL + '/avatars/instructor-1.png'}
            alt="Instructor"
            style={{ height: '100px' }}
            ref={containerRef}
          />
        </Wrapper>
      </Container>
    </Layout>
  );
}
