import React from 'react';
import { Link } from 'react-router-dom';

import {
  IoCompassOutline,
  IoSearchOutline,
  IoAddCircleOutline,
  IoPlayOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { NavContainer } from './styles';

export default function Navigation() {
  return (
    <>
      <NavContainer>
        <Link to="/discover">
          <button>
            <IoCompassOutline size={26} />
            <span>Discover</span>
          </button>
        </Link>

        <Link to="/search">
          <button>
            <IoSearchOutline size={26} />
            <span>Search</span>
          </button>
        </Link>

        <Link to="/upload">
          <button>
            <IoAddCircleOutline size={26} />
            <span>Upload</span>
          </button>
        </Link>

        <Link to="/favorites">
          <button>
            <IoPlayOutline size={26} />
            <span>Tutorials</span>
          </button>
        </Link>

        <Link to="/profile">
          <button>
            <IoPersonOutline size={26} />
            <span>Profile</span>
          </button>
        </Link>
      </NavContainer>
    </>
  );
}
