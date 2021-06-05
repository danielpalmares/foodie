import styled from 'styled-components';

export const DiscoverContainer = styled.div`
  padding: 0 2rem;

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
  }

  main {
    display: flex;
    flex-direction: column;
    margin-bottom: 6rem; // because of navigation
    overflow: hidden;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
  }
`;

export const DrinkList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    button {
      font-family: 'Lexend', sans-serif;
      font-size: 1.7rem;
      font-weight: 700;
      color: ${props => props.theme.fontColors.bg};
      padding: 1rem;
      border: 2px solid transparent;
      outline: none;
      border-radius: 1rem;
      background: ${props => props.theme.colors.tertiary};
      transition: all 0.2s;
      text-align: center;
      white-space: nowrap;
      cursor: pointer;

      &:active {
        border-color: ${props => props.theme.colors.primary};
      }
    }
  }
`;
