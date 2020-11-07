import styled from 'styled-components';

import XButton from '@components/XButton';

const SecondaryForm = styled.div`
`;

const RemoveButton = styled(XButton)`
  margin-left: 1.5rem;
  opacity: 0;
  transition: all ease 200ms;
  visibility: hidden;

  ${({ variant }) => variant === 'alias' && `
    margin-right: -2rem;
  `}
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

const Option = styled.option`
  color: #000;
`;

export default { SecondaryForm, FormField, RemoveButton, Option };
