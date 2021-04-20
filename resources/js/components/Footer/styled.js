import styled from 'styled-components';
import { responsive } from '@theme/mixins';

const Footer = styled.footer`
  background: ${({ theme }) => theme.selected.main[2]};
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  justify-content: center;
  padding: 1rem 1.5rem;
  transition: all 420ms ease;
  transition-property: background, box-shadow, color;

  ${responsive.tablet`
    background: ${({ theme }) => theme.selected.main[1]};
    box-shadow: 0 2px 6px 0 ${({ theme }) => theme.selected.main.shadow};
    justify-content: space-between;
  `}
`;

export default { Footer };
