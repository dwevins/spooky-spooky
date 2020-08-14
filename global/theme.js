import { createGlobalStyle } from 'styled-components';

export const Theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF'
  }
};

export const Resets = createGlobalStyle`
  #__next, html, body {
    background-color: ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.white};
    font-family: sans-serif;
    min-height: 100vh;
    margin: 0;
    width: 100vw;
  }

  @font-face {
    font-family: 'terminal-grotesque';
    font-style: normal;
    font-weight: normal;
    src: url('/static/fonts/terminal-grotesque-webfont.woff') format('woff');
  }

  * {
    box-sizing: border-box;
  }
`;
