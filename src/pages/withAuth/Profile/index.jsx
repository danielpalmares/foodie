import React from 'react';
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
} from './styles';
import progressBar from '../../../assets/timelineBar.png';

import Layout from '../../Layout';

import { IoArrowForwardOutline, IoCloudUploadOutline } from 'react-icons/io5';

export default function Profile() {
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
                <p>Gender</p>
                <span>Female</span>
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
        </Wrapper>
      </Container>
    </Layout>
  );
}
