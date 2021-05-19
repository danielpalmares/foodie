import React from 'react';
import { Link } from 'react-router-dom';

import { IoArrowForwardOutline } from 'react-icons/io5';
import { Button } from './styles';

export default function SingUpButton() {
  return (
    <Link to="/signup">
      <Button>
        <span>Sign up now</span>
        <IoArrowForwardOutline size={22} />
      </Button>
    </Link>
  );
}
