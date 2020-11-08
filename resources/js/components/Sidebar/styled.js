import styled, { css } from 'styled-components';
import { responsive } from '@theme/mixins';
import zindex from '@theme/zindex';

const SideBar = styled.div`
  background: ${({ theme }) => theme.selected.main[1]};
  left: -100%;
  min-height: 100%;
  max-height: 80vh;
  opacity: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  min-width: 100%;
  transform: translateX(-100%);
  transition: transform 250ms, opacity 500ms;
  z-index: ${zindex.tooltip};

  ${({ open }) => !!open && css`
    opacity: 1;
    transform: translateX(100%);
    transition: transform 250ms, opacity 500ms;
  `};

  ${responsive.tablet`
    border-radius: 8px;
    box-shadow: 0 2px 6px 0 ${({ theme }) => theme.selected.main.shadow};
    display: block;
    left: 0;
    min-width: 25%;
    opacity: 1;
    position: relative;
    transform: none;
    width: 25%;
  `}
`;

export default { SideBar };
