import styled from 'styled-components';
import { getColor } from '@theme/mixins';

const ProfilePicture = styled.img`
  border: 6px solid ${getColor('main', 1)};
  border-radius: 100%;
  box-shadow: 0 0 5px ${getColor('contrast', 4)};
  height: 200px;
  min-height: 200px;
  min-width: 200px;
  object-fit: cover;
  position: relative;
  width: 200px;

  ${({ onClick }) => !!onClick && `
    &:hover {
      cursor: pointer;
    }
  `};

  ${({ thumbnail }) => !!thumbnail && `
    border-width: 2px;
    height: 30px;
    min-height: 30px;
    min-width: 30px;
    margin-right: 0.5rem;
    width: 30px;

    &:hover {
      cursor: initial;
    }
  `};
`;

export default { ProfilePicture };
