import React from 'react';

import { Button, SearchVideoContainer } from './styles';

export default function SearchVideoButton({ active }) {
  return (
    <>
      <SearchVideoContainer>
        <span>Would you like some videos?</span>
        <Button active={active}>Videos</Button>
      </SearchVideoContainer>
    </>
  );
}
