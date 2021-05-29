import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../contexts/GlobalContextProvider';

import Layout from './Layout';
import RecipeCard from '../components/AppRecipeCard';

import styles from '../styles/pages/Results.module.scss';

export default function Results() {
  const { recipesByCategory } = useContext(GlobalContext);

  useEffect(() => {
    console.log(recipesByCategory);
  });

  return (
    <Layout>
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
