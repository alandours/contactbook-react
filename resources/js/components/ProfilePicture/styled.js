import styled from 'styled-components';
import { getColor } from '@theme/mixins';

const ProfilePicture = styled.img`
  border: 6px solid ${getColor('common', 'white')};
  border-radius: 100%;
  box-shadow: 0 0 5px rgba(0,0,0,0.25);
  height: 200px;
  min-height: 200px;
  min-width: 200px;
  object-fit: cover;
  position: relative;
  width: 200px;

  &:hover {
    cursor: pointer;
  }
`;

const FullSizePicture = styled.img`
  max-height: 90%;
  max-width: 90%;
`;

export default { ProfilePicture, FullSizePicture };
