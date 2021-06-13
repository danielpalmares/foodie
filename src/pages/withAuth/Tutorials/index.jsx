import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useObserver } from '../../../hooks';

import { recipeVideosAction } from '../../../store/recipeVideos';

import Layout from '../../Layout';
import SearchInput from '../../../components/InputSearch';
import Spinner from '../../../components/Spinner';

import Player from '../../../components/Player';

import { Container, TutorialSection } from './styles';

import { getPagination } from '../../../utils';

import { activePageAction } from '../../../store/activePage';

export default function Tutorials() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(activePageAction('tutorials')));

  const tutorials = useSelector(state => state.recipeVideos.videos);

  const [setRef, visible, clearRef] = useObserver({
    threshold: 1,
  });

  const [changedInput, setChangedInput] = useState('');
  const [researchedRecipe, setResearchedRecipe] = useState('');

  const [currentTutorialID, setCurrentTutorialID] = useState('');
  const [spinner, setSpinner] = useState(false);

  const resultsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [videos, setVideos] = useState(null);
  const [resultsCount, setResultsCount] = useState(10);

  useEffect(() => {
    if (visible) {
      setCurrentPage(currentPage + 1);
      clearRef();
    }
  }, [visible]);

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

      let videosPushed = videos.slice();

      videosPushed.push(...videosPerPage);

      setVideos(videosPushed);
      setResultsCount(resultsCount + 10);
      return;
    }

    return;
  }, [tutorials, currentPage]);

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

          {console.log(videos, currentPage)}
          {videos &&
            videos.map((tutorial, i) => {
              return (
                <TutorialSection
                  key={i}
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
                </TutorialSection>
              );
            })}
        </main>
      </Container>
    </Layout>
  );
}
