import styled from 'styled-components';
import zindex from '@theme/zindex';

const Gradient = styled.div`
  background: ${({ theme }) => theme.selected.primary.main};
  height: 5px;
  min-height: 5px;
  opacity: 0;
  overflow: hidden;
  position: relative;
  transition: opacity 2000ms;
  width: 100%;
  z-index: ${zindex.normal};

  ${({ palette }) => !!palette && palette.length && `
    background: linear-gradient(90deg,
      ${palette[0]} 0%, ${palette[0]} 20%,
      ${palette[1]} 20%, ${palette[1]} 40%,
      ${palette[2]} 40%, ${palette[2]} 60%,
      ${palette[3]} 60%, ${palette[3]} 80%,
      ${palette[4]} 80%, ${palette[4]} 100%
    );
    opacity: 1;
    transition: opacity 2000ms;
  `}

  ${({ palette, smooth }) => palette && palette.length && smooth && `
      background: linear-gradient(90deg, ${palette[0]} 0%, ${palette[1]} 25%, ${palette[2]} 50%, ${palette[3]} 75%, ${palette[4]} 100%);
  `};
`;

export default { Gradient };
