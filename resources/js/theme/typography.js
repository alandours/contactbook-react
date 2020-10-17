import { css } from 'styled-components';

export const weight = {
  extraLight: 100,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
};

export const size = {
  small: '0.75rem',
  text: '0.9rem',
  info: '0.95rem',
  normal: '1rem',
  medium: '1.1rem',
  large: '1.2rem',
  xlarge: '1.3rem',
  max: '1.5rem'
};

export const fontFace = css`
  @font-face{
    font-family: 'Open Sans';
    font-weight: 300;
    src: url('/fonts/OpenSans-Light.ttf');
  }

  @font-face{
    font-family: 'Open Sans';
    font-weight: 400;
    src: url('/fonts/OpenSans-Regular.ttf');
  }

  @font-face{
    font-family: 'Open Sans';
    font-weight: 600;
    src: url('/fonts/OpenSans-SemiBold.ttf');
  }

  @font-face{
    font-family: 'Open Sans';
    font-weight: 700;
    src: url('/fonts/OpenSans-Bold.ttf');
  }

  @font-face{
    font-family: 'Open Sans';
    font-weight: 800;
    src: url('/fonts/OpenSans-ExtraBold.ttf');
  }
`;

export const fontFamily = css`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
`;
