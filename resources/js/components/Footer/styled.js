import styled from 'styled-components';
import { getColor } from '@theme/mixins';

const Footer = styled.div`
  background: ${getColor('common', 'white')};
  box-shadow: 0 2px 6px 0 ${getColor('grey', 'normal')};
  color: ${getColor('common', 'black')};
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

export default { Footer };
