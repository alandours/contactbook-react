import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { size } from '@theme/typography';

const Button = styled.button`
  background: ${getColor('primary', 'main')};
  border: 0;
  border-radius: 2px;
  color: ${getColor('common', 'white')};
  cursor: pointer;
  font-size: ${size.text};
  font-weight: 500;
  padding: 0.5rem;

  &:hover {
    background: ${getColor('primary', 'light')};
    transition: 300ms;
  }
`;

export default { Button };
