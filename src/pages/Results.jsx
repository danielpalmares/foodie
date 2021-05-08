import React from 'react';

import Layout from './Layout';
import RecipeCard from '../components/RecipeCard';

import styles from '../styles/pages/Results.module.scss';

export default function Results() {
  return (
    <Layout hasBackPageBtn onlyBackBtn>
      <div className={styles.Results}>
        <div>
          <h3>
            Search results <strong>"Avocado"</strong>
          </h3>
          <span>
            <strong>233</strong> recipes found
          </span>
        </div>

        <RecipeCard />
      </div>
    </Layout>
  );
}
