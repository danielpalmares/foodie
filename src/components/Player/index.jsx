import React from 'react';
import ReactPlayer from 'react-player';

import { videoBaseUrl } from '../../config/Tutorials';

import AppTitle from '../../components/AppTitle';
import PlayIcon from '../../components/PlayIcon';

import { IoTimerOutline, IoEyeOutline } from 'react-icons/io5';
import { PlayerWrapper, Container } from './styles';

export default function Player({
  tutorialTitle,
  duration,
  tutorialID,
  thumbnail,
  views,
  isPlaying,
  handlePlay,
  handlePause,
  handleEnd,
  handlePreview,
}) {
  return (
    <Container>
      <div>
        <AppTitle>{tutorialTitle}</AppTitle>
        <span>
          <IoTimerOutline size={18} color="FF8C00" />
          {duration.minutes === 0 ? duration.seconds : duration.minutes}
          {duration.minutes === 0 && ' sec'}
          {duration.minutes > 0 && ' min'}
        </span>
      </div>
      <ReactPlayer
        controls
        playing={isPlaying}
        width="100%"
        height="20rem"
        wrapper={PlayerWrapper}
        light={thumbnail}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnd}
        onClickPreview={handlePreview}
        playIcon={<PlayIcon />}
        url={`${videoBaseUrl}${tutorialID}`}
      />

      <span id="views">
        <IoEyeOutline size={18} color="FF8C00" />
        {views} views
      </span>
    </Container>
  );
}
