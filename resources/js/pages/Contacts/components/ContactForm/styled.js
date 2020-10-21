import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import zindex from '@theme/zindex';

const ContactForm = styled.form`
  overflow: scroll;
  width: 100%;
  margin-bottom: 3.25rem;
`;

const InputContainer = styled.div`
  display: flex;
`;

const FormActions = styled.div`
  background: ${getColor('common', 'white')};
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  position: absolute;
  width: 100%;
  z-index: ${zindex.fixed};
`;

export default { ContactForm, InputContainer, FormActions };
