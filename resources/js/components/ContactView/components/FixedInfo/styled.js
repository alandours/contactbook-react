import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { size, weight } from '@theme/typography';
import zindex from '@theme/zindex';

const FixedInfo = styled.div`
  background: ${getColor('common', 'white')};
  display: flex;
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  z-index: ${zindex.tooltip};
`;

const ProfilePicture = styled.img`
  border: 2px solid ${getColor('common', 'white')};
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0,0,0,0.25);
  height: 30px;
  margin-right: 0.5rem;
  object-fit: cover;
  width: 30px;
`;

const Name = styled.p`
  align-items: center;
  display: flex;
  font-size: ${size.normal};
  font-weight: ${weight.bold};
`;

export default { FixedInfo, ProfilePicture, Name };
