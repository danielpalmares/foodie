import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

import {
  IoAddOutline,
  IoRemoveOutline,
  IoArrowForwardOutline,
  IoHeartOutline,
} from 'react-icons/io5';
import styles from '../styles/pages/Recipe.module.scss';

export default function Recipe() {
  return (
    <Layout hasBackPageBtn>
      <div className={styles.recipe}>
        <main>
          <span className={styles.tagMsg}>#ByCategories</span>
          <h2>Torta de Maçã</h2>
          <div
            style={{
              backgroundImage: `url('https://img.itdg.com.br/tdg/images/recipes/000/121/412/177581/177581_original.jpg?mode=crop&width=710&height=400')`,
            }}
          >
            <button>
              <IoHeartOutline size={26} />
            </button>
          </div>
          <span>
            Recipe by <strong>Daniel Palmares</strong>
          </span>
        </main>

        <section>
          <header>
            <h3>Ingredients</h3>
            <div>
              <span>2 servings</span>

              <button>
                <IoRemoveOutline size={14} />
              </button>
              <button>
                <IoAddOutline size={14} />
              </button>
            </div>
          </header>

          <div className={styles.ingredients}>
            <ul>
              <li>
                <span>Long bread</span>
                <strong>4 slices</strong>
              </li>

              <li>
                <span>Long bread sadfa asfasf das safasdf </span>
                <strong>4 slices</strong>
              </li>

              <li>
                <span>Long bread</span>
                <strong>4 slices</strong>
              </li>
            </ul>

            <button>
              Start cooking
              <div>
                <IoArrowForwardOutline size={22} color="#da521d" />
              </div>
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
