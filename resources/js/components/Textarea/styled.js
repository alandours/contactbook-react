import styled from 'styled-components';
import { getColor, formStyles } from '@theme/mixins';

const Textarea = styled.textarea`
  ${formStyles};
  border: 1px solid ${getColor('contrast', 4)};
  min-height: 150px;
  padding: 0.25rem;

  &:hover,
  &:focus {
    border: 1px solid ${getColor('primary', 'main')};
  }
`;

export default { Textarea };
