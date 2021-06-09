import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';

import { recipeVideosAction } from '../../../store/recipeVideos';

import Layout from '../../Layout';
import SearchInput from '../../../components/InputSearch';
import PlayerIcon from '../../../components/PlayIcon';
import Player from '../../../components/Player';

import { Container, PlayerWrapper } from './styles';

export default function Tutorials() {
  const dispatch = useDispatch();
  const tutorials = useSelector(state => state.recipeVideos.videos);
  console.log(tutorials);

  const [researchedRecipe, setResearchedRecipe] = useState('');
  const [changedInput, setChangedInput] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');

  const [isPlayingTutorial, setIsPlayingTutorial] = useState(false);
  const [currentTutorialID, setCurrentTutorialID] = useState('');

  function handleIsPlaying(ID) {
    currentTutorialID === ID && setIsPlayingTutorial(true);
    return true;
  }

  // fetch recipe tutorials
  useEffect(() => {
    if (!researchedRecipe) return;

    return dispatch(recipeVideosAction(researchedRecipe));
  }, [researchedRecipe]);

  // send recipe name formatted to its state
  function handleSearch() {
    const recipe = formatStringFromInput(changedInput);

    // if the recipe is the same as before
    if (recipe === researchedRecipe) return;

    return setResearchedRecipe(recipe);
  }

  // format input data
  function formatStringFromInput(string) {
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

          <section>
            {tutorials &&
              tutorials.map(tut => {
                return (
                  <Player
                    key={tut.id}
                    tutorialTitle={tut.shortTitle}
                    duration={tut.duration}
                    tutorialID={tut.id}
                    thumbnail={tut.thumbnail}
                    views={tut.views.toLocaleString('pt-BR')}
                    isPlaying={currentTutorialID === tut.id ? true : false}
                    handlePlay={() => setCurrentTutorialID(tut.id)}
                    handlePreview={() => setCurrentTutorialID(tut.id)}
                    handlePause={() => setCurrentTutorialID('')}
                    handleEnd={() => setCurrentTutorialID('')}
                  />
                );
              })}
          </section>
        </main>
      </Container>
    </Layout>
  );
}
