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

  ${({ variant }) => variant === 'danger' && `
    background: #ee5555;
  `}

  &:hover {
    background: ${getColor('primary', 'light')};
    transition: 300ms;

    ${({ variant }) => variant === 'danger' && `
      background: #ff6666;
    `}
  }
`;

export default { Button };
