import styled from 'styled-components';
import { getColor } from '@theme/mixins';

const Loader = styled.div`
  align-items: center;
  color: ${getColor('primary', 'main')};
  display: flex;
  justify-content: center;
  height: calc(100% - 32px);
`;

export default { Loader };
