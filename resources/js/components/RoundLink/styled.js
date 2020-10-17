import styled from 'styled-components';
import { getColor } from '@theme/mixins';

import { Link } from 'react-router-dom';

const RoundLink = styled(Link)`
  align-items: center;
  background: ${getColor('primary', 'main')};
  border-bottom: 2px solid ${getColor('primary', 'dark')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 35px;
  min-width: 35px;
  transition: all ease 200ms;

  &:hover {
    background: ${getColor('primary', 'light')};
    transition: all ease 100ms;
  }
`;

export default { RoundLink };
