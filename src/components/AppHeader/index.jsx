import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getItemFromLS, setItemFromLS } from '../../utils';

import { themeAction } from '../../store/theme';
import { logoutAction } from '../../store/user/actions';

import { dark, light } from '../../styles/themes';

import BlockLoadingScreen from '../BlockLoadingScreen';

import Logo from '../../assets/foodie-logo.svg';

import {
  IoArrowBackOutline,
  IoMoonSharp,
  IoSunnySharp,
  IoLogOutOutline,
} from 'react-icons/io5';

import { Header } from './styles';

export default function AppHeader({
  defaultHeader,
  onlyBackButton,
  profileHeader,
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  // setting up back page button
  const goBack = () => history.goBack();

  // setting up switch theme button
  const currentTheme = useSelector(state => state.theme.theme.mode);

  // get account username from redux
  const { username } = useSelector(state => state.user.loggedUser);

  const [isBlockScreen, setIsBlockScreen] = useState(false);

  function switchTheme() {
    currentTheme === 'light'
      ? dispatch(themeAction(dark))
      : dispatch(themeAction(light));

    sendThemeToLS();
  }

  function sendThemeToLS() {
    const themeArr = getItemFromLS('theme');

    const theme = {
      theme: currentTheme === 'light' ? 'dark' : 'light',
    };

    themeArr[0] = theme;

    return setItemFromLS('theme', themeArr);
  }

  function handleLogOut() {
    setIsBlockScreen(true);

    setTimeout(() => {
      return dispatch(logoutAction(username));
    }, 1 * 1000);
  }

  return (
    <>
      {isBlockScreen && <BlockLoadingScreen />}

      <Header>
        {defaultHeader && (
          <>
            <img src={Logo} className="logo" alt="Foodie logo" />

            <button onClick={switchTheme}>
              {currentTheme === 'light' ? (
                <IoMoonSharp size={26} color="#F4F1C9" />
              ) : (
                <IoSunnySharp size={26} color="#FDB813" />
              )}
            </button>
          </>
        )}

        {onlyBackButton && (
          <button onClick={goBack}>
            <IoArrowBackOutline size={26} />
          </button>
        )}

        {profileHeader && (
          <>
            <button onClick={goBack}>
              <IoArrowBackOutline size={26} />
            </button>

            <button onClick={() => handleLogOut()}>
              <IoLogOutOutline size={26} />
            </button>
          </>
        )}
      </Header>
    </>
  );
}
