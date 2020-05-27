import styled, { css } from 'styled-components';
import { getColor, formStyles } from '@theme/mixins';

const Input = styled.input`
  ${formStyles};

  ${({ type }) => type === 'search' && css`
    border: 0;
    border-bottom: 1px solid ${getColor('grey', 'normal')};
    border-radius: 4px 0 0 0;
    padding: 0.4rem 1.5rem;

    &:hover, &:focus {
      border: 0;
      border-bottom: 1px solid ${getColor('grey', 'normal')};
    }
  `}

  ${({ type }) => type === 'custom' && css`
    width: 80px;
  `}
`;

export default { Input };
