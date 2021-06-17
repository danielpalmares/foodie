import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    font-family: 'Nunito', sans-serif;
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
    scrollbar-color: ${props => props.theme.border.color} transparent;
  }

  // Works on Chrome, Edge, and Safari 
  *::-webkit-scrollbar {
    width: 6px; // overflow y
    height: 6px; // overflow x
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.border.color};
    border-radius: 2rem;
    border: none;
  }
`;
