import React from 'react';
import { Link } from 'react-router-dom';

import { IoEnterOutline } from 'react-icons/io5';
import { Button } from './styles';

export default function SingInButton() {
  return (
    <Link to="/signin" style={{ width: 'fit-content' }}>
      <Button>
        Sign in <IoEnterOutline size={20} />
      </Button>
    </Link>
  );
}
