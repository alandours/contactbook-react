import { css } from 'styled-components';
import breakpoints from './breakpoints';
import { size, weight, fontFamily } from './typography';

const getMin = key => `@media screen and (min-width: ${breakpoints[key]}px)`;

const getMinLandscape = key => `@media screen and (min-width: ${breakpoints[key]}px) and (orientation: landscape)`;

const getMinCustom = size => `@media screen and (min-width: ${size}px)`;

export const getColor = (theme, color) => {
  return color.reduce((themeAcc, currentColor) => {
    return themeAcc ? themeAcc[currentColor] : null;
  }, theme);
};

export const devices = {
  mobileXs: getMin('viewport320'),
  mobileXsLandscape: getMinLandscape('viewport320'),
  mobile: getMin('viewport360'),
  mobileLandscape: getMinLandscape('viewport480'),
  tablet: getMin('viewport768'),
  tabletLandscape: getMin('viewport992'),
  laptop: getMin('viewport1024'),
  desktop: getMin('viewport1280')
};

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const nonStyledButton = css`
  appearance: none;
  padding: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

export const responsive = {
  mobileXs: (...args) => css`
    ${devices.mobileXs} {
      ${css(...args)}
    }
  `,
  mobileXsLandscape: (...args) => css`
    ${devices.mobileXsLandscape} {
      ${css(...args)}
    }
  `,
  mobile: (...args) => css`
    ${devices.mobile} {
      ${css(...args)}
    }
  `,
  mobileLandscape: (...args) => css`
    ${devices.mobileLandscape} {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    ${devices.tablet} {
      ${css(...args)}
    }
  `,
  tabletLandscape: (...args) => css`
    ${devices.tabletLandscape} {
      ${css(...args)}
    }
  `,
  laptop: (...args) => css`
    ${devices.laptop} {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    ${devices.desktop} {
      ${css(...args)}
    }
  `,
  custom: (size, ...styles) => css`
    ${getMinCustom(size)} {
      ${css(...styles)}
    }`
};

export const backgroundImg = (url) => css`
  background-image: url(${url});
  background-size: cover;
  background-position: center;
`;

export const formStyles = css`
  background: transparent;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.selected.contrast[4]};
  color: ${({ theme }) => theme.selected.contrast[1]};
  ${fontFamily}
  font-size: ${size.text};
  outline: none;
  padding: 0.25rem 0;
  resize: none;
  width: 100%;

  ${({ hasIcon }) => hasIcon && `
    padding-left: 1.5rem;
  `}

  &:hover, &:focus {
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.mainColor.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.selected.contrast[1]};
  }
`;

export const buttonStyles = css`
  align-items: center;
  background: ${({ theme }) => theme.mainColor.main};
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.mainColor.dark};
  border-radius: 2px;
  color: ${({ theme }) => theme.selected.main[1]};
  cursor: pointer;
  display: flex;
  font-size: ${size.text};
  font-weight: 500;
  justify-content: center;
  transition: all ease 200ms;
  padding: 0.5rem 1.5rem;

  ${({ variant }) => variant === 'danger' && `
    background: #ee5555;
    border-bottom: 2px solid #dd4444;
  `}

  &:hover, &:focus {
    background: ${({ theme }) => theme.mainColor.light};
    transition: all ease 100ms;

    ${({ variant }) => variant === 'danger' && css`
      background: #ff6666;
    `}
  }
`;

export const linkStyles = css`
  align-self: flex-end;
  background: none;
  border: 0;
  color: ${({ theme }) => theme.selected.contrast[2]};
  font-size: ${size.text};
  font-weight: ${weight.regular};
  padding: 0.5rem;
  text-align: right;
  width: auto;

  ${({ highlight }) => !!highlight && css`
    color: ${({ theme }) => theme.mainColor.dark};

    ${({ variant }) => variant === 'textDanger' && css`
      color: ${({ theme }) => theme.selected.danger.main};
    `}
  `};

  &:hover {
    background: none;
    color: ${({ theme }) => theme.mainColor.main};

    ${({ variant }) => variant === 'textDanger' && css`
      color: ${({ theme }) => theme.selected.danger.main};
    `}
  }
`;
