import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../../components/Wrapper';

import {
  IoCompassOutline,
  IoSearchOutline,
  IoAddCircleOutline,
  IoPlayOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { NavContainer, Button } from './styles';

import { useSelector } from 'react-redux';

export default function Navigation() {
  const { activePage } = useSelector(state => state.activePage);

  return (
    <Wrapper>
      <NavContainer>
        <Link to="/discover">
          <Button isActive={activePage === 'discover'}>
            <IoCompassOutline size={26} />
            <span>Discover</span>
          </Button>
        </Link>

        <Link to="/search">
          <Button isActive={activePage === 'search'}>
            <IoSearchOutline size={26} />
            <span>Search</span>
          </Button>
        </Link>

        <Link to="/upload">
          <Button isActive={activePage === 'upload'}>
            <IoAddCircleOutline size={26} />
            <span>Upload</span>
          </Button>
        </Link>

        <Link to="/favorites">
          <Button isActive={activePage === 'tutorials'}>
            <IoPlayOutline size={26} />
            <span>Tutorials</span>
          </Button>
        </Link>

        <Link to="/profile">
          <Button isActive={activePage === 'profile'}>
            <IoPersonOutline size={26} />
            <span>Profile</span>
          </Button>
        </Link>
      </NavContainer>
    </Wrapper>
  );
}
