import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { weight, size } from '@theme/typography';

const Title = styled.h1`
  color: ${getColor('contrast', 1)};
  display: flex;
  font-size: ${size.max};
  font-weight: ${weight.bold};
  justify-content: center;
  margin-bottom: 0.5rem;
`;

export default { Title };
