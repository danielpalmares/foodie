import { createGlobalStyle } from 'styled-components';

import LexendLight from '../fonts/Lexend-Light.ttf';
import LexendRegular from '../fonts/Lexend-Regular.ttf';
import LexendSemiBold from '../fonts/Lexend-SemiBold.ttf';
import LexendBold from '../fonts/Lexend-Bold.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lexend';
    src: url(${LexendLight}), url(${LexendRegular}),
    url(${LexendSemiBold}), url(${LexendBold});
  }  

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    background: ${props => props.theme.background};
    font-family: 'Lexend', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${props => props.theme.fontColors.primary};
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  // Works on Firefox 
  * {
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.colors.border} transparent;

    @media screen and (min-width: 320px) {
      scrollbar-width: 0;
    }

    @media screen and (min-width: 768px) {
      scrollbar-width: thin;
    }
  }

  // Works on Chrome, Edge, and Safari 
  *::-webkit-scrollbar {
    width: 6px; // overflow y
    height: 6px; // overflow x

    @media screen and (min-width: 320px) {
      display: none;
    }

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.border};
    border-radius: 2rem;
    border: none;
  }
`;
