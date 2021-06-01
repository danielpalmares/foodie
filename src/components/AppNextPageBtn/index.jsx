import React from 'react';

import { IoArrowForwardOutline } from 'react-icons/io5';
import { Button } from './styles';

export default function NextPageButton({ value, handleClick }) {
  return (
    <>
      <Button onClick={handleClick}>
        Page {value} <IoArrowForwardOutline size={14} />
      </Button>
    </>
  );
}
