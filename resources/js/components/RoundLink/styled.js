import styled from 'styled-components';

import { Link } from 'react-router-dom';

const RoundLink = styled(Link)`
  align-items: center;
  background: ${({ theme }) => theme.mainColor.main};
  border-bottom: 2px solid ${({ theme }) => theme.mainColor.dark};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 35px;
  min-width: 35px;
  transition: all ease 200ms;

  &:hover {
    background: ${({ theme }) => theme.mainColor.light};
    transition: all ease 100ms;
  }
`;

export default { RoundLink };
