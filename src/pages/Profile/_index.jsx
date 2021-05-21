import React from 'react';
import { Container, Stats } from './styles';

import Layout from '../Layout';

import { IoPencilOutline } from 'react-icons/io5';

export default function Profile() {
  return (
    <>
      <Layout hasBackPageBtn onlyBackBtn>
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
                <p>Status</p>
                <span>Chief</span>
              </li>
            </ul>
          </Stats>
        </Container>
      </Layout>
    </>
  );
}
