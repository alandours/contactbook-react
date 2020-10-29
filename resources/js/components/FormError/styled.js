import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { weight, size } from '@theme/typography';

const FormError = styled.div`
  color: ${getColor('danger', 'light')};
  font-size: ${size.small};
  font-weight: ${weight.regular};
  margin-top: 4px;
  white-space: nowrap;
`;

export default { FormError };
