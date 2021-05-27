import React from 'react';
import { Container, Stats, Missions } from './styles';

import Layout from '../Layout';

import { IoPencilOutline } from 'react-icons/io5';

export default function Profile() {
  return (
    <>
      <Layout>
        <Container>
          <header>
            <div
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + '/images/woman-1.png'
                })`,
              }}
            >
              <button>
                <IoPencilOutline size={18} />
              </button>
            </div>
          </header>

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

          <Missions>
            <h1>Daily Tasks</h1>
            <ul>
              <div>
                <li>
                  <p>
                    send us more than 20 recipes to receive a status and buy a
                    recipe for a saturday lunch yeah yeah
                  </p>
                  <span>20 points</span>
                </li>
              </div>

              <div>
                <li>
                  send us more than 20 recipes to receive a status
                  <span>20 points</span>
                </li>
              </div>

              <div>
                <li>
                  send us more than 20 recipes to receive a status
                  <span>20 points</span>
                </li>
              </div>
            </ul>
          </Missions>
        </Container>
      </Layout>
    </>
  );
}
