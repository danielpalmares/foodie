import React from 'react';
import { Link } from 'react-router-dom';

import notFound from '../../assets/not-found.svg';

import { IoHomeOutline } from 'react-icons/io5';
import { Container } from './styles';

export default function NotFound() {
  return (
    <Container>
      <img src={notFound} alt="Not Found" />

      <Link to="/">
        <button>
          Go to home <IoHomeOutline size={20} />
        </button>
      </Link>
    </Container>
  );
}
