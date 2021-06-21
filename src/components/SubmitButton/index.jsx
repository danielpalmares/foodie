import React from 'react';

import { IoArrowForwardOutline } from 'react-icons/io5';
import { Button } from './styles';

export default function SubmitButton({ children }) {
  return (
    <Button type="submit">
      {children} <IoArrowForwardOutline size={20} />
    </Button>
  );
}
