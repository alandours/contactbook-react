import styled from 'styled-components';
import { weight, size } from '@theme/typography';

const Title = styled.h1`
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  font-size: ${size.max};
  font-weight: ${weight.bold};
  margin: 0.5rem 0;
`;

export default { Title };
