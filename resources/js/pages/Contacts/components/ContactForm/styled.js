import styled from 'styled-components';
import { size } from '@theme/typography';
import zindex from '@theme/zindex';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@components/Button';

const ContactForm = styled.form`
  overflow: scroll;
  width: 100%;
  margin-bottom: 3.75rem;
`;

const InputContainer = styled.div`
  display: flex;
`;

const FormActions = styled.div`
  background: ${({ theme }) => theme.selected.main[1]};
  bottom: 0;
  box-shadow: 0 0 8px 2px ${({ theme }) => theme.selected.main.shadow};
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem;
  position: absolute;
  width: 100%;
  z-index: ${zindex.fixed};

  ${({ edit }) => !!edit && `
    justify-content: space-between;
  `};
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  font-size: ${size.small};
  margin-right: 0.5rem;

  &:hover, &:focus {
    color: ${({ theme }) => theme.selected.danger.main};
  }
`;

const DeleteButton = styled(Button)`
  padding: 0.5rem;

  &:hover, &:focus {
    color: ${({ theme }) => theme.selected.danger.main};
  }
`;

export default { ContactForm, InputContainer, FormActions, DeleteButton, DeleteIcon };
