import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  IoCompassOutline,
  IoCompassSharp,
  IoSearchOutline,
  IoSearchSharp,
  IoAddCircleOutline,
  IoAddCircleSharp,
  IoPlayOutline,
  IoPlaySharp,
  IoPersonOutline,
  IoPersonSharp,
} from 'react-icons/io5';
import { NavContainer, Button } from './styles';

export default function Navigation() {
  const { activePage } = useSelector(state => state.activePage);

  return (
    <NavContainer>
      <Link to="/discover">
        <Button isActive={activePage === 'discover'}>
          {activePage === 'discover' ? (
            <IoCompassSharp size={26} />
          ) : (
            <IoCompassOutline size={26} />
          )}
          <span>Discover</span>
        </Button>
      </Link>

      <Link to="/search">
        <Button isActive={activePage === 'search'}>
          {activePage === 'search' ? (
            <IoSearchSharp size={26} />
          ) : (
            <IoSearchOutline size={26} />
          )}
          <span>Search</span>
        </Button>
      </Link>

      <Link to="/upload">
        <Button isActive={activePage === 'upload'}>
          {activePage === 'upload' ? (
            <IoAddCircleSharp size={26} />
          ) : (
            <IoAddCircleOutline size={26} />
          )}
          <span>Upload</span>
        </Button>
      </Link>

      <Link to="/tutorials">
        <Button isActive={activePage === 'tutorials'}>
          {activePage === 'tutorials' ? (
            <IoPlaySharp size={26} />
          ) : (
            <IoPlayOutline size={26} />
          )}
          <span>Tutorials</span>
        </Button>
      </Link>

      <Link to="/profile">
        <Button isActive={activePage === 'profile'}>
          {activePage === 'profile' ? (
            <IoPersonSharp size={26} />
          ) : (
            <IoPersonOutline size={26} />
          )}
          <span>Profile</span>
        </Button>
      </Link>
    </NavContainer>
  );
}
