import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useObserver } from '../../../hooks';

import { recipeVideosAction } from '../../../store/recipeVideos';

import Layout from '../../Layout';
import SearchInput from '../../../components/InputSearch';
import Spinner from '../../../components/Spinner';

import Player from '../../../components/Player';

import { Container, ObserverTarget } from './styles';

export default function Tutorials() {
  const dispatch = useDispatch();
  const tutorials = useSelector(state => state.recipeVideos.videos); // null at start

  const [changedInput, setChangedInput] = useState('');
  const [researchedRecipe, setResearchedRecipe] = useState('');

  const [currentTutorialID, setCurrentTutorialID] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [videosPerPage, setVideosPerPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  // get the recipes for each page
  function getSearchResultsPage(recipesArr, curPage, resultsPerPage) {
    const start = (curPage - 1) * resultsPerPage;
    const end = curPage * resultsPerPage;
    const newResults = recipesArr.slice(start, end);

    return newResults;
  }

  // get the recipes per page and store it in the state
  useEffect(() => {
    if (!tutorials) return;

    // render the recipes while changing the state
    const newVideosPerPage = getSearchResultsPage(
      tutorials,
      currentPage,
      resultsPerPage
    );

    const newArr = videosPerPage;
    newArr.push(newVideosPerPage);

    return setVideosPerPage(newArr);
  }, [tutorials, currentPage]);

  // remove recipes while searching again
  // get recipes sliced

  const [setRef, visible] = useObserver({
    threshold: 1.0,
  });

  useEffect(() => {
    if (videosPerPage) setSpinner(false);

    return;
  }, [tutorials]);

  useEffect(() => {
    if (videosPerPage === []) return;

    if (visible && currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
  }, [visible]);

  // fetch recipe tutorials
  useEffect(() => {
    if (!researchedRecipe) return;

    setSpinner(true);

    return dispatch(recipeVideosAction(researchedRecipe));
  }, [researchedRecipe, dispatch]);

  // send recipe name formatted to its state
  function handleSearch() {
    const recipe = formatStringFromInput(changedInput);

    // if the recipe is the same as before
    if (recipe === researchedRecipe) return;

    return setResearchedRecipe(recipe);
  }

  // format input data
  function formatStringFromInput(string) {
    // for one recipe/query
    const recipeString = string;
    const recipeFormatted = recipeString
      .replace(/\s+/g, ' ')
      .trim()
      .replace(' ', '+');

    return recipeFormatted;
  }

  return (
    <Layout onlyBackButton>
      <Container>
        <main>
          <header>
            <h1>Find the tutorial you want!</h1>
            <span>Don't know what to search? Search for chicken soup!</span>
          </header>
          <SearchInput
            handleInputChange={e => setChangedInput(e.target.value)}
            handleSearch={() => handleSearch()}
            placeholder="Search"
          />

          {spinner && <Spinner />}

          {videosPerPage !== [] &&
            videosPerPage.map((pageArr, i) => {
              return (
                <section key={i}>
                  {pageArr.map(tut => {
                    return (
                      <Player
                        key={tut.id}
                        tutorialID={tut.id}
                        currentTutorialID={currentTutorialID}
                        tutorialTitle={tut.shortTitle}
                        duration={tut.duration}
                        thumbnail={tut.thumbnail}
                        views={tut.views}
                        rating={tut.rating}
                        handlePlay={() =>
                          currentTutorialID !== tut.id &&
                          setCurrentTutorialID(tut.id)
                        }
                        handlePreview={() => setCurrentTutorialID(tut.id)}
                      />
                    );
                  })}
                </section>
              );
            })}

          <ObserverTarget ref={setRef} />
        </main>
      </Container>
    </Layout>
  );
}
