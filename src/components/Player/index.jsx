import React from 'react';
import ReactPlayer from 'react-player';

import { videoBaseUrl } from '../../config/Tutorials';

import AppTitle from '../../components/AppTitle';
import PlayIcon from '../../components/PlayIcon';

import {
  IoTimerOutline,
  IoEyeOutline,
  IoThumbsUpOutline,
} from 'react-icons/io5';
import { PlayerWrapper, Container, InfoWrapper } from './styles';

export default function Player({
  tutorialID,
  tutorialTitle,
  thumbnail,
  duration,
  views,
  rating,
  handlePlay,
  handlePreview,
  currentTutorialID,
}) {
  const viewsFormatted = views.toLocaleString('pt-BR');
  const ratingFormatted = rating.toFixed(2) * 100;

  return (
    <Container>
      <div>
        <AppTitle>{tutorialTitle}</AppTitle>
        <span className="player-timing">
          <IoTimerOutline size={18} />
          {duration.minutes === 0 ? duration.seconds : duration.minutes}
          {duration.minutes === 0 && ' sec'}
          {duration.minutes > 0 && ' min'}
        </span>
      </div>

      <PlayerWrapper>
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          url={`${videoBaseUrl}${tutorialID}`}
          playing={currentTutorialID === tutorialID ? true : false}
          light={thumbnail}
          playIcon={<PlayIcon />}
          onPlay={handlePlay}
          onClickPreview={handlePreview}
          controls
        />
      </PlayerWrapper>

      <InfoWrapper>
        <span className="player-views">
          <IoEyeOutline size={18} />
          {viewsFormatted}
          {viewsFormatted === '1' ? ' view' : ' views'}
        </span>
        <span className="player-rating">
          <IoThumbsUpOutline size={18} />
          {ratingFormatted}
          {'%'}
        </span>
      </InfoWrapper>
    </Container>
  );
}
