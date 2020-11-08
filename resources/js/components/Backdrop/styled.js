import styled from 'styled-components';
import zindex from '@theme/zindex';

const Backdrop = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${zindex.modal};

  &:focus {
    outline: 0;
  }
`;

export default { Backdrop };
