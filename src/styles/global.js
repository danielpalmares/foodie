import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
    background: $color-black--100;
    font-family: 'Lexend', sans-serif;
    font-size: $font-regular;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
