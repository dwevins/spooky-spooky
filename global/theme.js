import { createGlobalStyle } from 'styled-components';

export const Theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF'
  }
};

export const Resets = createGlobalStyle`
  #__next, html, body {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.white};
    font-family: sans-serif;
    min-height: 100vh;
    margin: 0;
    width: 100vw;
  }

  * {
    box-sizing: border-box;
  }
`;
