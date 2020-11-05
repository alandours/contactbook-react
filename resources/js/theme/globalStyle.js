import { createGlobalStyle } from 'styled-components';
import { fontFace, fontFamily, size, weight } from '@theme/typography';

const GlobalStyle = createGlobalStyle`
  ${fontFace};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    text-decoration: none;
  }

  html {
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.selected.main[2]};
    height: 100%;
    ${fontFamily};
    font-size: ${size.text};
    font-weight: ${weight.regular};
    color: ${({ theme }) => theme.selected.contrast[1]};
  }

  body, body * {
    transition: all 500ms ease;
    transition-property: background, color, box-shadow, border-color;
  }

  body.preload, body.preload * {
    transition: none !important;
  }

  #contact-book {
    height: 100%;
  }
`;

export default GlobalStyle;
