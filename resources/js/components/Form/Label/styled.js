import styled, { css } from 'styled-components';
import { size, weight } from '@theme/typography';

const Label = styled.label`
  background: ${({ theme }) => theme.selected.main[1]};
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 30%;
  width: 40%;

  ${({ label }) => label === 'Alias' && css`
    width: 207px;
  `}

  & + & {
    margin-left: 1rem;
  }
`;

const LabelText = styled.span`
  color: ${({ theme }) => theme.selected.contrast[2]};
  font-size: ${size.small};
  font-weight: ${weight.light};
  left: 0;
  position: absolute;
  top: -1rem;
`;

export default { Label, LabelText };
