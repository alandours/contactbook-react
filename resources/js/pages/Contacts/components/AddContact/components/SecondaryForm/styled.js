import styled from 'styled-components';
import { getColor, formStyles } from '@theme/mixins';

import TextInput from '@components/TextInput/styled';
import RemoveButton from './components/RemoveButton/styled';

const SecondaryForm = styled.div`
`;

const FormField = styled.div`
  display: flex;
  margin: 0.75rem 0;

  &:hover ${RemoveButton.RemoveButton} {
    opacity: 1;
    visibility: visible;
    transition: 50ms;
  }

  &:hover ${TextInput.TextInput} {
    border-color: ${getColor('primary', 'main')};
  }
`;

const Select = styled.select`
  ${formStyles};
  border: 1px solid ${getColor('grey', 'dark')};
  border-radius: 0;
  margin: 0 1.5rem;
  width: 200px;

  &:hover, &:focus {
    border: 1px solid ${getColor('primary', 'main')};
  }
`;

export default { SecondaryForm, FormField, Select };
