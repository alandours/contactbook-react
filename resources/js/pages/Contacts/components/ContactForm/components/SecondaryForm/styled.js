import styled from 'styled-components';
import RemoveButtonStyles from './components/RemoveButton/styled';

const { RemoveButton } = RemoveButtonStyles;

const SecondaryForm = styled.div`
`;

const FormField = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.75rem 0;

  &:hover ${RemoveButton} {
    opacity: 1;
    visibility: visible;
    transition: all ease 100ms;
  }
`;

export default { SecondaryForm, FormField };
