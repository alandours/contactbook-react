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

const Name = styled.span`
  display: flex;
  align-items: center;

  &:after {
    ${({ birthday }) => !!birthday && `
      content: '${birthday}';
      font-size: ${size.large};
      font-weight: ${weight.regular};
      color: ${getColor('grey', 'darker')};
      margin: 0 1rem;
      margin-top: 2px;
    `};
  }
`;

const Link = styled.a`
  color: ${getColor('primary', 'dark')};
  font-weight: ${weight.normal};
`;

const Text = styled.p`
  display: inline-block;
`;

export default { ProfileData, MainDatafield, Name, Link, Text };
