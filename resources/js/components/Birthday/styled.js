import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getColor } from '@theme/mixins';
import { weight } from '@theme/typography';

const Birthday = styled(Link)`
  align-items: center;
  border-radius: 2px; 
  display: flex;
  padding: 0.5rem;
  position: relative;
  transition: all ease 200ms;

  &:hover {
    background: ${getColor('main', 2)};;
    transition: all ease 100ms;
  }
`;

const Day = styled.div`
  color: ${getColor('danger', 'dark')};
  font-weight: ${weight.semiBold};
  margin-right: 1rem;
  text-align: center;
  width: 22px;
`;

const Name = styled.div`
  color: ${getColor('contrast', 1)};
  margin-left: 0.25rem;
  margin-right: 0.5rem;
`;

const Age = styled.div`
  color: ${getColor('contrast', 3)};;
`;

export default { Birthday, Day, Name, Age };
