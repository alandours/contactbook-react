import styled from 'styled-components';
import { responsive } from '@theme/mixins';

const Settings = styled.div`
  width: 100%;

  ${responsive.tablet`
    position: absolute;
    top: 0;
  `}
`;

export default { Settings };
