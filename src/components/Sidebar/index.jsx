import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { themeAction } from '../../store/theme';
import { logOutAction } from '../../store/user/actions';
import { dark, light } from '../../styles/themes';
import { setItemFromLS, getItemFromLS } from '../../utils';

import Logo from '../../assets/foodie-logo.svg';

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
  IoPeopleOutline,
  IoPeopleSharp,
  IoRestaurantOutline,
  IoRestaurantSharp,
  IoMoonSharp,
  IoSunnySharp,
  IoLogOutOutline,
} from 'react-icons/io5';

import { SidebarContainer, LogoArea, NavList, NavItem, BottomActions, Divider } from './styles';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { activePage } = useSelector(state => state.activePage);
  const currentTheme = useSelector(state => state.theme.theme.mode);
  const user = useSelector(state => state.user.user);

  function switchTheme() {
    currentTheme === 'light'
      ? dispatch(themeAction(dark))
      : dispatch(themeAction(light));

    const themeArr = getItemFromLS('theme');
    themeArr[0] = { theme: currentTheme === 'light' ? 'dark' : 'light' };
    setItemFromLS('theme', themeArr);
  }

  function handleLogOut() {
    dispatch(logOutAction());
  }

  const navItems = [
    { id: 'discover', path: '/discover', label: 'Discover', Icon: IoCompassOutline, ActiveIcon: IoCompassSharp },
    { id: 'search', path: '/search', label: 'Search', Icon: IoSearchOutline, ActiveIcon: IoSearchSharp },
    { id: 'upload', path: '/upload', label: 'Upload', Icon: IoAddCircleOutline, ActiveIcon: IoAddCircleSharp },
    { id: 'tutorials', path: '/tutorials', label: 'Tutorials', Icon: IoPlayOutline, ActiveIcon: IoPlaySharp },
    { id: 'community', path: '/community', label: 'Community', Icon: IoRestaurantOutline, ActiveIcon: IoRestaurantSharp },
    { id: 'friends', path: '/friends', label: 'Friends', Icon: IoPeopleOutline, ActiveIcon: IoPeopleSharp },
    { id: 'profile', path: '/profile', label: 'Profile', Icon: IoPersonOutline, ActiveIcon: IoPersonSharp },
  ];

  return (
    <SidebarContainer>
      <LogoArea>
        <img src={Logo} alt="Foodie" className="logo" />
        {user && (
          <div className="user-info">
            <img
              src={`${process.env.PUBLIC_URL}avatars/${(user.gender === 'male' || user.gender === 1) ? 'man' : 'woman'}-${user.avatar || 1}.png`}
              alt="avatar"
              className="avatar"
            />
            <div>
              <strong>{user.name}</strong>
              <span>@{user.username}</span>
            </div>
          </div>
        )}
      </LogoArea>

      <Divider />

      <NavList>
        {navItems.map(({ id, path, label, Icon, ActiveIcon }) => {
          const isActive = activePage === id;
          return (
            <NavItem key={id} isActive={isActive}>
              <Link to={path}>
                {isActive ? <ActiveIcon size={22} /> : <Icon size={22} />}
                <span>{label}</span>
              </Link>
            </NavItem>
          );
        })}
      </NavList>

      <Divider />

      <BottomActions>
        <button onClick={switchTheme} className="theme-btn">
          {currentTheme === 'light' ? (
            <><IoMoonSharp size={20} /> Dark mode</>
          ) : (
            <><IoSunnySharp size={20} /> Light mode</>
          )}
        </button>

        <button onClick={handleLogOut} className="logout-btn">
          <IoLogOutOutline size={20} /> Sign out
        </button>
      </BottomActions>
    </SidebarContainer>
  );
}
