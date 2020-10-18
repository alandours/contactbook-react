import { createGlobalStyle } from 'styled-components';
import { getColor } from '@theme/mixins';
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
    background: ${getColor('grey', 'lighter')};
    height: 100%;
    ${fontFamily};
    font-size: ${size.text};
    font-weight: ${weight.regular};
  }

  #contact-book {
    height: 100%;
  }
`;

export default GlobalStyle;
