import styled from 'styled-components';
import { weight, size } from '@theme/typography';
import { responsive } from '@theme/mixins';

const Title = styled.h1`
  align-items: center;
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  font-size: ${size.xlarge};
  font-weight: ${weight.bold};
  margin: 0.5rem 0;

  ${responsive.laptop`
    font-size: ${size.max};
  `}
`;

export default { Title };
