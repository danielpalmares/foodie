import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; // 1rem = 10px // 10px / 16px * 100

    @media screen and (min-width: 800px) {
      font-size: 75%; // 1.2rem
    }
  }

  body {
    box-sizing: border-box;
    scroll-behavior: smooth;

    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.regular};
    font-weight: 400;
    color: ${props => props.theme.fontColors.primary};
    background: ${props => props.theme.background};
    min-height: 100vh;

  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  // Works on Firefox 
  * {
    scrollbar-width: 0;
    scrollbar-color: ${props => props.theme.border.color} transparent;

    @media screen and (min-width: 768px) {
      scrollbar-width: thin;
    }
  }

  // Works on Chrome, Edge, and Safari 
  *::-webkit-scrollbar {
    display: none;
    width: 6px; // overflow y
    height: 6px; // overflow x

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.border.color};
    border-radius: 2rem;
    border: none;
  }

  *::-webkit-scrollbar-corner {
    display: none;
  }
`;
