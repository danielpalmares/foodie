import React from 'react';
import { Link } from 'react-router-dom';

import { IoEnterOutline } from 'react-icons/io5';
import { Button } from './styles';

export default function SingInButton() {
  return (
    <Link to="/signin">
      <Button>
        <span>Sign in</span>
        <IoEnterOutline size={22} />
      </Button>
    </Link>
  );
}
