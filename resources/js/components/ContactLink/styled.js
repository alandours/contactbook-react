import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { weight } from '@theme/typography';

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
  color: ${({ theme }) => theme.selected.danger.main};
  font-weight: ${weight.semiBold};
  margin-right: 1rem;
  text-align: center;
  width: 35px;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.selected.contrast[1]};
  margin-left: 0.25rem;
  margin-right: 0.5rem;
`;

const Age = styled.div`
  color: ${({ theme }) => theme.selected.contrast[3]};;
`;

export default { ContactLink, Date, Name, Age };
