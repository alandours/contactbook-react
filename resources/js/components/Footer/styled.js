import styled from 'styled-components';
import { getColor } from '@theme/mixins';

const Footer = styled.div`
  background: ${getColor('main', 1)};
  box-shadow: 0 2px 6px 0 ${getColor('main', 'shadow')};
  color: ${getColor('contrast', 1)};
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

export default { Footer };
