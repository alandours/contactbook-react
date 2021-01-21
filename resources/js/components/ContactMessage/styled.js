import styled, { css } from 'styled-components';

import XButton from '@components/XButton';

const CloseButton = styled(XButton)`
  position: absolute;
  top: 0.7rem;
  right: 1rem;

  & > svg {
    ${({ variant }) => variant === 'success' && css`
      color: ${({ theme }) => theme.mainColor.dark};
    `};

    ${({ variant }) => variant === 'error' && css`
      color: ${({ theme }) => theme.selected.danger.dark};
    `};

    ${({ variant }) => variant === 'warning' && css`
      color: ${({ theme }) => theme.selected.warning.dark};
    `};
  }
`;

const ContactMessage = styled.div`
  border-radius: 4px;
  position: absolute;
  left: 2%;
  opacity: 0;
  padding: 0.6rem 1rem;
  transition: opacity 300ms;
  top: 2%;
  width: 96%;
  z-index: 1000;

  ${({ variant }) => variant === 'success' && css`
    background: ${({ theme }) => theme.mainColor.main};
    border: 1px solid ${({ theme }) => theme.mainColor.dark};
    color: ${({ theme }) => theme.selected.main[1]};
  `};

  ${({ variant }) => variant === 'error' && css`
    background: ${({ theme }) => theme.selected.danger.main};
    border: 1px solid ${({ theme }) => theme.selected.danger.dark};
    color: ${({ theme }) => theme.selected.main[1]};
  `};

  ${({ variant }) => variant === 'warning' && css`
    background: ${({ theme }) => theme.selected.warning.main};
    border: 1px solid ${({ theme }) => theme.selected.warning.dark};
    color: ${({ theme }) => theme.selected.main[1]};
  `};

  ${({ visible }) => visible && `
    opacity: 1;
  `};
`;

export default { ContactMessage, CloseButton };
