import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getColor } from '@theme/mixins';

const Birthday = styled(Link)`
  align-items: center;
  display: flex;
  padding: 0.5rem 0;
`;

const Day = styled.div`
  color: red;
  margin-right: 1rem;
  text-align: center;
  width: 22px;
`;

const Name = styled.div`
  color: ${getColor('common', 'black')};
  margin-left: 0.25rem;
  margin-right: 0.5rem;
`;

const Age = styled.div`
  color: ${getColor('grey', 'darker')};;
  margin-top: 1px;
`;

export default { Birthday, Day, Name, Age };
