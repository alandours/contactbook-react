import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { size, weight } from '@theme/typography';

const Button = styled.button`
  background: ${getColor('primary', 'main')};
  border: 0;
  border-bottom: 2px solid ${getColor('primary', 'dark')};
  border-radius: 2px;
  color: ${getColor('common', 'white')};
  cursor: pointer;
  font-size: ${size.text};
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  transition: all ease 100ms;

  ${({ variant }) => variant === 'danger' && `
    background: #ee5555;
    border-bottom: 2px solid #dd4444;
  `}

  ${({ variant }) => variant === 'text' && `
    align-self: flex-end;
    background: none;
    border: 0;
    color: ${getColor('grey', 'darkest')};
    font-size: ${size.text};
    font-weight: ${weight.regular};
    padding: 0;
    text-align: right;
    width: auto;
  `}

  &:hover {
    background: ${getColor('primary', 'light')};
    transition: all ease 200ms;

    ${({ variant }) => variant === 'danger' && `
      background: #ff6666;
    `}

    ${({ variant }) => variant === 'text' && `
      background: none;
      color: ${getColor('primary', 'dark')};
    `}
  }

  
`;

export default { Button };
