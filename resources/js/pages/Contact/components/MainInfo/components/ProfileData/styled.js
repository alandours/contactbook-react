import styled, { css } from 'styled-components';
import { size, weight } from '@theme/typography';
import { responsive } from '@theme/mixins';

const ProfileData = styled.div`
  margin-left: 0.75rem;
  width: 100%;

  ${responsive.tablet`
    margin-left: 1.5rem;
  `}
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
  margin-right: 0.5rem;

  ${responsive.tablet`
    margin-right: 1rem;
  `}

  &:after {
    ${({ birthday }) => !!birthday && css`
      content: '${birthday}';
      font-size: ${size.normal};
      font-weight: ${weight.regular};
      color: ${({ theme }) => theme.selected.contrast[3]};
      margin-left: 0.5rem;
      margin-top: 1px;

      ${responsive.tablet`
        font-size: ${size.medium};
        margin-left: 1rem;
      `}

      ${responsive.laptop`
        font-size: ${size.large};
      `}
    `};
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.mainColor.dark};
  font-weight: ${weight.normal};
`;

const Text = styled.p`
  display: inline-block;
`;

export default { ProfileData, MainDatafield, Name, Link, Text };
