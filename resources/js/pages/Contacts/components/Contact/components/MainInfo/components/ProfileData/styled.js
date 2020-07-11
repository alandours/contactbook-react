import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { size, weight } from '@theme/typography';

const ProfileData = styled.div`
  margin-left: 1.5rem;
  width: 100%;
`;

const MainDatafield = styled.div`
  align-items: center;
  display: flex;
  margin: 0.25rem 0;
`;

const Name = styled.h2`
  display: flex;
  font-size: ${size.max};
  font-weight: ${weight.bold};
  margin-bottom: 0.5rem;
`;

const Age = styled.span`
  align-items: center;
  display: flex;
  font-size: ${size.large};
  font-weight: ${weight.regular};
  color: ${getColor('grey', 'darker')};
  margin: 0 1rem;
`;

const Link = styled.a`
  color: ${getColor('primary', 'dark')};
  font-weight: ${weight.semiBold};
`;

const Text = styled.p`
  display: inline-block;
`;
export default { ProfileData, MainDatafield, Name, Age, Link, Text };
