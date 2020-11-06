import styled from 'styled-components';
import { size, weight } from '@theme/typography';

const Button = styled.button`
  background: ${({ theme }) => theme.mainColor.main};
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.mainColor.dark};
  border-radius: 2px;
  color: ${({ theme }) => theme.selected.main[1]};
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
    color: ${({ theme }) => theme.selected.contrast[2]};
    font-size: ${size.text};
    font-weight: ${weight.regular};
    padding: 0;
    text-align: right;
    width: auto;
  `}

  &:hover, &:focus {
    background: ${({ theme }) => theme.mainColor.light};
    transition: all ease 200ms;

    ${({ variant }) => variant === 'danger' && `
      background: #ff6666;
    `}

    ${({ variant }) => variant === 'text' && `
      background: none;
      color: ${({ theme }) => theme.mainColor.dark};
    `}
  }

  
`;

export default { Button };
