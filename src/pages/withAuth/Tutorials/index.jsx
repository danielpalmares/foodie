import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useObserver } from '../../../hooks';

import { recipeVideosAction } from '../../../store/recipeVideos';
import { activePageAction } from '../../../store/activePage';

import { resultsPerPage } from '../../../config/Tutorials';

import { getPagination, getSingleStringFromInput } from '../../../utils';

import Layout from '../../Layout';
import AppTitle from '../../../components/AppTitle';
import SearchInput from '../../../components/InputSearch';
import Spinner from '../../../components/Spinner';
import Player from '../../../components/Player';

import { Container, TutorialContainer } from './styles';

export default function Tutorials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const tutorials = useSelector(state => state.recipeVideos.videos);

  const [setRef, visible, clearRef] = useObserver({
    threshold: 1,
  });

  const [videos, setVideos] = useState(null);
  const [currentTutorialID, setCurrentTutorialID] = useState('');
  const [spinner, setSpinner] = useState(false);

  const [changedInput, setChangedInput] = useState('');
  const [researchedRecipe, setResearchedRecipe] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [resultsCount, setResultsCount] = useState(10);

  // set up it as active page for the navigation
  useEffect(() => dispatch(activePageAction('tutorials')));

  // fetch recipe tutorials
  useEffect(() => {
    if (!researchedRecipe) return;

    setSpinner(true);

    return dispatch(recipeVideosAction(researchedRecipe));
  }, [researchedRecipe, dispatch]);

  // scrolling pagination
  useEffect(() => {
    if (!visible) return;

    setCurrentPage(currentPage + 1);
    clearRef(); // clear the old ref
    return;
  }, [visible]);

  // scrolling pagination functionality
  useEffect(() => {
    if (!tutorials) return;

    // if we got the tutorials then stop spinner
    if (tutorials) setSpinner(false);

    // first time we got tutorials
    if (currentPage === 1) {
      const videosPerPage = getPagination(
        tutorials,
        currentPage,
        resultsPerPage
      );

      setVideos(videosPerPage);
      return;
    }

    // after first time we got tutorials
    if (currentPage > 1) {
      const videosPerPage = getPagination(
        tutorials,
        currentPage,
        resultsPerPage
      );

      // copy the current videos
      const videosPushed = videos.slice();

      // then push the new ones
      videosPushed.push(...videosPerPage);

      setVideos(videosPushed);
      setResultsCount(resultsCount + 10);
      return;
    }

    return;
  }, [tutorials, currentPage]);

  // send recipe name formatted to its state
  function handleSearch() {
    const recipe = getSingleStringFromInput(changedInput);

    // if the recipe is the same as before then do nothing
    if (recipe === researchedRecipe) return;

    reset(); // reset the old results
    setResearchedRecipe(recipe);
    return;
  }

  // get states back to the start point
  function reset() {
    setVideos([]);
    setCurrentPage(1);
    setResultsCount(10);
    return;
  }

  return (
    <Layout onlyBackButton>
      <Container>
        <main>
          <header>
            <AppTitle>Find the tutorial you want!</AppTitle>
            <span>Don't know what to search? Search for chicken soup!</span>
          </header>

          <SearchInput
            handleInputChange={e => setChangedInput(e.target.value)}
            handleSearch={() => handleSearch()}
            placeholder="Chicken soup? Pizza? Cake?"
          />

          {spinner && <Spinner />}

          {videos &&
            videos.map((tutorial, i) => {
              return (
                <TutorialContainer
                  key={i + 1}
                  ref={resultsCount - 1 === i ? setRef : null}
                >
                  <Player
                    key={tutorial.id}
                    tutorialID={tutorial.id}
                    currentTutorialID={currentTutorialID}
                    tutorialTitle={tutorial.shortTitle}
                    duration={tutorial.duration}
                    thumbnail={tutorial.thumbnail}
                    views={tutorial.views}
                    rating={tutorial.rating}
                    handlePlay={() =>
                      currentTutorialID !== tutorial.id &&
                      setCurrentTutorialID(tutorial.id)
                    }
                    handlePreview={() => setCurrentTutorialID(tutorial.id)}
                  />
                </TutorialContainer>
              );
            })}
        </main>
      </Container>
    </Layout>
  );
}
