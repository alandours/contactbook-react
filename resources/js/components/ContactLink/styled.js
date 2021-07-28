import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { size, weight } from '@theme/typography';

const ContactLink = styled(Link)`
  align-items: center;
  border-radius: 2px; 
  display: flex;
  padding: 0.5rem;
  position: relative;
  transition: all ease 200ms;

  &:hover {
    background: ${({ theme }) => theme.selected.main[2]};;
    transition: all ease 100ms;
  }
`;

const Date = styled.div`
  color: ${({ theme }) => theme.mainColor.dark};
  font-weight: ${weight.medium};
  margin-right: 1rem;
  text-align: center;
  width: 35px;
`;

const NamedDate = styled.span`
  border-radius: 2px;
  color: ${({ theme }) => theme.mainColor.dark};
  font-size: 0.7rem;
  font-weight: ${weight.semiBold};
  margin-left: 0;
  padding: 0.125rem 0.5rem;
  text-align: center;
  text-transform: uppercase;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.selected.contrast[1]};
  margin-left: 0.25rem;
  margin-right: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 420ms ease;
  transition-property: color;
`;

const Age = styled.div`
  color: ${({ theme }) => theme.selected.contrast[3]};;
`;

const FavoriteIcon = styled.span`
  font-size: ${size.small};
  margin: 0 0.5rem;
`;

export default { ContactLink, Date, NamedDate, Name, Age, FavoriteIcon };
