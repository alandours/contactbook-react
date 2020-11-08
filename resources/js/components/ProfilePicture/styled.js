import styled, { css } from 'styled-components';
import { responsive } from '@theme/mixins';

const ProfilePicture = styled.img`
  border: 6px solid ${({ theme }) => theme.selected.main[1]};
  border-radius: 100%;
  box-shadow: 0 0 5px ${({ theme }) => theme.selected.contrast[4]};
  height: 220px;
  margin: auto;
  min-height: 220px;
  min-width: 220px;
  object-fit: cover;
  position: relative;
  width: 220px;

  ${responsive.tablet`
    margin: 0;
    height: 200px;
    min-height: 200px;
    min-width: 200px;
    width: 200px;
  `}

  ${({ onClick }) => !!onClick && css`
    &:hover {
      cursor: pointer;
    }
  `};

  ${({ thumbnail }) => !!thumbnail && css`
    border-width: 2px;
    height: 30px;
    margin: 0;
    margin-right: 0.5rem;
    min-height: 30px;
    min-width: 30px;
    width: 30px;

    ${responsive.tablet`
      height: 30px;
      margin: 0;
      margin-right: 0.5rem;
      min-height: 30px;
      min-width: 30px;
      width: 30px;
    `}

    &:hover {
      cursor: initial;
    }
  `};
`;

export default { ProfilePicture };
