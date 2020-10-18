import styled from 'styled-components';
import { weight, size } from '@theme/typography';

const Title = styled.h1`
  display: flex;
  font-size: ${size.max};
  font-weight: ${weight.bold};
  margin-bottom: 0.5rem;
`;

export default { Title };
