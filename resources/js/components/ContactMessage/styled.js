import styled from 'styled-components';
import { getColor } from '@theme/mixins';

import CloseButton from '@components/CloseButton';

const Button = styled(CloseButton)`
  position: absolute;
  top: 0.6rem;
  right: 1rem;
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

  ${({ type }) => type === 'success' && `
    background: ${getColor('primary', 'main')};
    border: 1px solid ${getColor('primary', 'dark')};
    color: ${getColor('main', 1)};
  `};

  ${({ type }) => type === 'error' && `
    background: ${getColor('danger', 'main')};
    border: 1px solid ${getColor('danger', 'dark')};
    color: ${getColor('main', 1)};
  `};

  ${({ visible }) => visible && `
    opacity: 1;
  `};
`;

export default { ContactMessage, Button };
