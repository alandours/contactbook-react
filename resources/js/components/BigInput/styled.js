import styled from 'styled-components';
import { formStyles } from '@theme/mixins';
import { size, weight } from '@theme/typography';

const Label = styled.label`
  background: ${({ theme }) => theme.selected.main[1]};
  display: flex;
  flex-direction: column;
  position: relative;
  width: 40%;

  & + & {
    margin-left: 1rem;
  }
`;

const BigInput = styled.input`
  ${formStyles};
  font-size: ${size.max};
  font-weight: ${weight.bold};
  padding-left: 0;
  width: 100%;
`;

export default { Label, BigInput };
