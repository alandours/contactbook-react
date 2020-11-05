import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { getColor } from '@theme/mixins';
import { weight } from '@theme/typography';

const ListItem = styled.li`
  & + & {
    border-top: 1px solid ${getColor('main', 3)};
  }

  ${({ type }) => type === 'contact' && css`
    background: transparent;
    transition: 400ms ease;

    &:hover{
      background: ${getColor('main', 2)};
      transition: 200ms ease;
    }
  `};

  ${({ type }) => type === 'letter' && css`
    background: ${getColor('primary', 'main')};
    border-bottom: 2px solid ${getColor('primary', 'dark')};
    color: ${getColor('main', 1)};
    font-weight: ${weight.semiBold};
    padding: 0.45rem 0.75rem;
  `};

  ${({ sticky }) => sticky && css`
    position: sticky;
    top: 30px;
  `};
`;

const ListLink = styled(Link)`
  color: ${getColor('contrast', 1)};
  display: block;
  overflow: hidden;
  padding: 0.45rem 0.75rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default { ListItem, ListLink };
