import styled from 'styled-components';
import { getColor, formStyles } from '@theme/mixins';
import { size, weight } from '@theme/typography';

const Label = styled.label`
  background: ${getColor('main', 1)};
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 30%;
  width: 40%;

  ${({ label }) => label === 'Alias' && `
    width: 207px;
  `}
`;

const LabelText = styled.span`
  color: ${getColor('contrast', 2)};
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

  ${({ label }) => !!label && `
    margin: 1rem;
  `}

  &:disabled {
    background: transparent;
    border: 0;
  }
`;

export default { Label, LabelText, Container, TextInput };
