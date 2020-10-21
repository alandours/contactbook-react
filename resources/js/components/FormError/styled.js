import styled from 'styled-components';
import { weight, size } from '@theme/typography';

const FormError = styled.div`
  color: red;
  font-size: ${size.small};
  font-weight: ${weight.light};
  margin-top: 4px;
  white-space: nowrap;
`;

export default { FormError };
