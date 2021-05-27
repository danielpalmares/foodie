import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalContextProvider';
import { IoSearchOutline, IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import styles from '../styles/pages/Search.module.scss';
import Layout from './Layout';
import RecipeCard from '../components/RecipeCard';

export default function Search() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Search');
  });

  return (
    <Layout>
      <div className={styles.search}>
        <header>
          <h1>What's in your kitchen?</h1>
          <span>Enter up to 2 ingredients or more</span>

          <div className={styles.inputWrapper}>
            <input type="text" placeholder="Type and add your ingredients..." />

            <button>
              <IoSearchOutline size={26} />
            </button>
          </div>
        </header>

        <main>
          <section></section>
        </main>
        <div className={styles.btnFindRecipes}>
          <Link to="#">
            <button>
              Find recipes
              <IoArrowForward size={16} />
            </button>
          </Link>
        </div>

        <RecipeCard />
      </div>
    </Layout>
  );
}
