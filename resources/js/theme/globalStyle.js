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

  body {
    background: ${getColor('grey', 'lighter')};
    height: 100%;
    ${fontFamily};
    font-size: ${size.text};
    font-weight: ${weight.regular};
  }
`;

export default GlobalStyle;
