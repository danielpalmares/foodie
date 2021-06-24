import React from 'react';

import { IoArrowBackOutline } from 'react-icons/io5';

import { Button } from './styles';

export default function PreviousPageButton({ value, handleClick }) {
  return (
    <Button onClick={handleClick}>
      <IoArrowBackOutline size={14} /> Page {value}
    </Button>
  );
}
