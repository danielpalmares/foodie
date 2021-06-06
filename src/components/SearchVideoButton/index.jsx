import React from 'react';

import { Button, SearchVideoContainer } from './styles';

export default function SearchVideoButton({ active, handleClick }) {
  return (
    <>
      <SearchVideoContainer>
        <span>Would you like some videos?</span>
        <Button active={active} onClick={handleClick}>
          Videos
        </Button>
      </SearchVideoContainer>
    </>
  );
}
