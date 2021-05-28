import React from 'react';
import { useHistory } from 'react-router-dom';
import { dark, light } from '../../styles/themes';
import { switchThemeAction } from '../../store/switchTheme';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '../../assets/foodie-logo.svg';
import {
  IoArrowBackOutline,
  IoMoonSharp,
  IoSunnySharp,
  IoCartOutline,
} from 'react-icons/io5';
import { HeaderContainer, UserContainer } from './styles';

export default function AppHeader({
  onlyBackButton = false,
  switchThemeButton = false,
  defaultHeader = false,
}) {
  // setting up back page button
  const history = useHistory();
  const goBack = () => history.goBack();

  // setting up switch theme button
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    state => state.switchThemeReducer.theme.mode
  );
  const switchTheme = () =>
    currentTheme === 'light'
      ? dispatch(switchThemeAction(dark))
      : dispatch(switchThemeAction(light));

  return (
    <>
      <HeaderContainer>
        {onlyBackButton && (
          <button onClick={goBack}>
            <IoArrowBackOutline size={26} />
          </button>
        )}

        {switchThemeButton && (
          <>
            <button onClick={goBack}>
              <IoArrowBackOutline size={26} />
            </button>

            <button onClick={switchTheme}>
              {currentTheme === 'light' ? (
                <IoMoonSharp size={26} color="#F4F1C9" />
              ) : (
                <IoSunnySharp size={26} color="#FDB813" />
              )}
            </button>
          </>
        )}

        {defaultHeader && (
          <>
            <button>
              <IoCartOutline size={26} />
            </button>

            <img src={Logo} alt="Foodie logo" />

            <UserContainer>
              <img src="/images/woman-1.png" alt="User Profile" />
            </UserContainer>
          </>
        )}
      </HeaderContainer>
    </>
  );
}
