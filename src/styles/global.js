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
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
