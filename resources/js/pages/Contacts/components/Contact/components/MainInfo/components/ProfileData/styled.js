import styled from 'styled-components';
import { size, weight } from '@theme/typography';

const ProfileData = styled.div`
  margin-left: 1.5rem;
  width: 100%;
`;

const MainDatafield = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  margin: 0.25rem 0;
`;

const Name = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  &:after {
    ${({ birthday }) => !!birthday && `
      content: '${birthday}';
      font-size: ${size.large};
      font-weight: ${weight.regular};
      color: ${({ theme }) => theme.selected.contrast[3]};
      margin-left: 1rem;
      margin-top: 1px;
    `};
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.selected.primary.dark};
  font-weight: ${weight.normal};
`;

const Text = styled.p`
  display: inline-block;
`;

export default { ProfileData, MainDatafield, Name, Link, Text };
