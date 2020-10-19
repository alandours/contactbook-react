import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { size } from '@theme/typography';

const Button = styled.button`
  background: ${getColor('primary', 'main')};
  border: 0;
  border-bottom: 2px solid ${getColor('primary', 'dark')};
  border-radius: 2px;
  color: ${getColor('common', 'white')};
  cursor: pointer;
  font-size: ${size.text};
  font-weight: 500;
  padding: 0.5rem;
  transition: all ease 100ms;

  ${({ variant }) => variant === 'danger' && `
    background: #ee5555;
    border-bottom: 2px solid #dd4444;
  `}

  &:hover {
    background: ${getColor('primary', 'light')};
    transition: all ease 200ms;

    ${({ variant }) => variant === 'danger' && `
      background: #ff6666;
    `}
  }
`;

export default { Button };
