import styled from 'styled-components';
import { weight, size } from '@theme/typography';

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.selected.danger.light};
  font-size: ${size.small};
  font-weight: ${weight.regular};
  margin-top: 4px;
  white-space: nowrap;
`;

export default { ErrorMessage };
