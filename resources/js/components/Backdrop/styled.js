import styled from 'styled-components';
import { responsive } from '@theme/mixins';
import { primary, secondary, grey, common } from '@theme/palette';
import { weight, size } from '@theme/typography';
import zindex from '@theme/zindex';

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.9);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${zindex.fixed}
`;

export default { Backdrop };
