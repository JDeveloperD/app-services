import { createGlobalStyle, css } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
  * {
    box-sizing: border-box;

    &:before,
    &:after {
        box-sizing: inherit;
    }
  }

  :focus {
    outline: none;
  }

  html {
    scroll-behavior: smooth;
  }

  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      overflow-x: hidden;
      background: ${theme.colors.body};
      color: ${theme.colors.text};
      font-family: ${theme.fonts.fontPrimary};
      position: relative;
    }

    button {
      cursor: pointer;
      font-size: ${theme.fontSizes.base};
      font-family: ${theme.fonts.fontPrimary};
    }

    a {
      color: ${theme.colors.link};
      cursor: pointer;

      &:hover {
        color: ${darken(0.15, theme.colors.link)};
      }
    }

    p {
      line-height: 1.8;
      margin-block-start: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block-start: 0;
    }
    figure {
      margin: 0;
    }
  `}
`;
