import styled, { css } from 'styled-components';
import { buttonStyles, linkStyles } from '@theme/mixins';

const Button = styled.button`
  ${buttonStyles};

  ${({ variant }) => (variant === 'text' || variant === 'textDanger') && css`
    ${linkStyles};
  `}
`;

export default { Button };
