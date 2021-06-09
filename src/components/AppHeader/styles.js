import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  /* @media screen and (min-width: 320px) {
    max-width: 300px;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    max-width: 355px;
    margin: 0 auto;
  }

  @media screen and (min-width: 425px) {
    max-width: 405px;
    margin: 0 auto;
  } */

  @media screen and (min-width: 768px) {
    max-width: 668px;
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme.fontColors.tertiary};
    color: ${props => props.theme.fontColors.secondary};
    border: 2px solid ${props => props.theme.colors.border};
    outline: none;

    border-radius: 1rem;
    padding: 1rem;
    transition: all 0.2s;
    cursor: pointer;

    &:active {
      transform: translateY(0.5rem) scale(0.9);
      border-color: ${props => props.theme.colors.primary};
    }
  }

  img {
    height: calc(86px / 2);
  }
`;

export const UserContainer = styled.div`
  width: 4.6rem;
  height: 4.6rem;
  transition: all 0.2s;

  &:active {
    transform: translateY(0.5rem) scale(0.9);
  }

  img {
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
`;
