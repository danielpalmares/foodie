import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { dark, light } from '../../styles/themes';
import { themeAction } from '../../store/theme';

import Logo from '../../assets/foodie-logo.svg';

import {
  IoArrowBackOutline,
  IoMoonSharp,
  IoSunnySharp,
  IoSettingsOutline,
} from 'react-icons/io5';
import { Header } from './styles';

import { getItemFromLS, setItemFromLS } from '../../utils';

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

  return (
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

          <button>
            <IoSettingsOutline size={26} />
          </button>
        </>
      )}
    </Header>
  );
}
