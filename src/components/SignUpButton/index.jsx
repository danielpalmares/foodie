import React from 'react';
import { Link } from 'react-router-dom';

import { IoArrowForwardOutline } from 'react-icons/io5';
import { Button } from './styles';

export default function SingUpButton({ children, direction = '#' }) {
  return (
    <Link to={direction} style={{ width: '30rem', margin: '0 auto' }}>
      <Button>
        {children} <IoArrowForwardOutline size={20} />
      </Button>
    </Link>
  );
}
