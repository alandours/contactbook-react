import styled from 'styled-components';
import { responsive } from '@theme/mixins';

import XButton from '@components/XButton';

const SecondaryForm = styled.div`
`;

const RemoveButton = styled(XButton)`
  margin-left: 1.5rem;
  transition: all ease 200ms;
  position: absolute;
  right: 0;
  top: -2rem;

  ${responsive.tablet`
    opacity: 0;
    position: initial;
    visibility: hidden;

    ${({ variant }) => variant === 'alias' && `
      margin-right: -0.5rem;
    `}
  `}
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3rem 0;
  position: relative;

  ${responsive.tablet`
    flex-direction: row;
    margin: 0.75rem 0;
  `}

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
