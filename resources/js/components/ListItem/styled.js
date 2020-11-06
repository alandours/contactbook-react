import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { weight } from '@theme/typography';

const ListItem = styled.li`
  & + & {
    border-top: 1px solid ${({ theme }) => theme.selected.main[3]};
  }

  ${({ type }) => type === 'contact' && css`
    background: transparent;
    transition: 400ms ease;

    &:hover{
      background: ${({ theme }) => theme.selected.main[2]};
      transition: 200ms ease;
    }
  `};

  ${({ type }) => type === 'letter' && css`
    background: ${({ theme }) => theme.mainColor.main};
    border-bottom: 2px solid ${({ theme }) => theme.mainColor.dark};
    color: ${({ theme }) => theme.selected.main[1]};
    font-weight: ${weight.semiBold};
    padding: 0.45rem 0.75rem;
  `};

  ${({ sticky }) => sticky && css`
    position: sticky;
    top: 30px;
  `};
`;

const ListLink = styled(Link)`
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: block;
  overflow: hidden;
  padding: 0.45rem 0.75rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default { ListItem, ListLink };
