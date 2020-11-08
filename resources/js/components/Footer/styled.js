import styled from 'styled-components';
import { responsive } from '@theme/mixins';
import zindex from '@theme/zindex';

const Footer = styled.div`
  background: ${({ theme }) => theme.selected.main[2]};
  box-shadow: 0 2px 6px 0 ${({ theme }) => theme.selected.main[1]};
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  z-index: ${zindex.fixed};

  ${responsive.tablet`
    background: ${({ theme }) => theme.selected.main[1]};
    box-shadow: 0 2px 6px 0 ${({ theme }) => theme.selected.main.shadow};
  `}
`;

export default { Footer };
