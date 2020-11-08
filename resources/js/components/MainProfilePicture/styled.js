import styled from 'styled-components';
import { responsive } from '@theme/mixins';

const FullSizePicture = styled.img`
  max-height: 100%;
  max-width: 100%;

  ${responsive.tablet`
    max-height: 90%;
    max-width: 90%;
  `}
`;

export default { FullSizePicture };
