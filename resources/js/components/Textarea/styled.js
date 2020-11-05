import styled from 'styled-components';
import { formStyles } from '@theme/mixins';

const Textarea = styled.textarea`
  ${formStyles};
  border: 1px solid ${({ theme }) => theme.selected.contrast[4]};
  min-height: 150px;
  padding: 0.25rem;

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.selected.primary.main};
  }
`;

export default { Textarea };
