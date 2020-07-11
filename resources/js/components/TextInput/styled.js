import styled from 'styled-components';
import { getColor, formStyles } from '@theme/mixins';
import { size, weight } from '@theme/typography';

const Label = styled.label`
  background: ${getColor('common', 'white')};
  display: flex;
  width: 40%;
  position: relative;
`;

const LabelText = styled.span`
  color: ${getColor('grey', 'darkest')};
  font-size: ${size.small};
  font-weight: ${weight.light};
  left: 0;
  position: absolute;
  top: -1rem;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const TextInput = styled.input`
  ${formStyles};

  ${({ label }) => label && `
    margin: 1rem;
  `}

  &:disabled {
    background: transparent;
    border: 0;
  }
`;

export default { Label, LabelText, Container, TextInput };
