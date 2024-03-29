import styled, { css } from 'styled-components';
import { nonStyledButton } from '@theme/mixins';
import { color } from '@theme/palette';

const ColorSelector = styled.button`
  ${nonStyledButton};
  cursor: pointer;

  & + & {
    margin-left: 0.5rem;
  }
`;

const ColorBox = styled.div`
  ${({ selectorColor }) => !!selectorColor && css`
    background: ${color[selectorColor].main};
  `};

  border: 2px solid ${({ theme }) => theme.selected.main[1]};
  border-radius: 100%;
  box-shadow: 0 0 5px ${({ theme }) => theme.selected.contrast[4]};
  height: 30px;
  transition: all 420ms ease;
  transition-property: border, box-shadow;
  width: 30px;
`;

const Label = styled.div`
  color: ${({ theme }) => theme.selected.contrast[1]};
`;

export default { ColorSelector, ColorBox, Label };
