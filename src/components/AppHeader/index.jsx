import React from 'react';
import { useHistory } from 'react-router-dom';

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
}) {
  const history = useHistory();
  const goBack = () => history.goBack();
  const theme = 'light'; // change later, get theme mode from store state

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

            <button>
              {theme === 'light' ? (
                <IoMoonSharp size={26} color="#F4F1C9" />
              ) : (
                <IoSunnySharp size={26} color="#FDB813" />
              )}
            </button>
          </>
        )}

        <button>
          <IoCartOutline size={26} />
        </button>

        <img src={Logo} alt="Foodie logo" />

        <UserContainer>
          <img src="/images/woman-1.png" alt="User Profile" />
        </UserContainer>
      </HeaderContainer>
    </>
  );
}
