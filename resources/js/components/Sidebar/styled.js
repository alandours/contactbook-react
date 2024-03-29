import styled, { css } from 'styled-components';
import { responsive } from '@theme/mixins';
import zindex from '@theme/zindex';

const SideBar = styled.div`
  background: ${({ theme }) => theme.selected.main[1]};
  left: -100%;
  max-height: calc(100% - 61px);
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  min-width: 100%;
  transform: translateX(-100%);
  transition: all 500ms, transform 250ms, background 420ms, box-shadow 420ms;
  z-index: ${zindex.fixed};

  ${({ open }) => !!open && css`
    min-height: calc(100% - 61px);
    position: fixed;
    top: 61px;
    transform: translateX(100%);
    transition: transform 250ms;
  `};

  ${responsive.tablet`
    border-radius: 8px;
    box-shadow: 0 2px 6px 0 ${({ theme }) => theme.selected.main.shadow};
    display: block;
    left: 0;
    min-width: 25%;
    max-height: 80vh;
    position: initial;
    transform: none;
    width: 25%;
  `}
`;

export default { SideBar };
