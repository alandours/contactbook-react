import styled, { css } from 'styled-components';
import { formStyles } from '@theme/mixins';
import { size, weight } from '@theme/typography';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  ${formStyles};

  ${({ label }) => !!label && `
    margin: 1rem;
  `}

  ${({ size: inputSize }) => inputSize === 'big' && css`
    font-size: ${size.max};
    font-weight: ${weight.bold};
    padding-left: 0;
    width: 100%;
  `}

  &:disabled {
    background: transparent;
    border: 0;
  }
`;

export default { Container, Input };
