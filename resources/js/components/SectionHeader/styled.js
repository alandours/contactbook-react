import styled from 'styled-components';
import { weight, size } from '@theme/typography';
import zindex from '@theme/zindex';

const SectionHeader = styled.h2`
  background: ${({ theme }) => theme.selected.main[3]};
  border-bottom: 2px solid ${({ theme }) => theme.selected.main.shadow};
  color: ${({ theme }) => theme.selected.contrast[1]};
  font-size: ${size.info};
  font-weight: ${weight.semiBold};
  padding: 0.5rem 1.5rem;
  width: 100%;
  z-index: ${zindex.tooltip};

  ${({ sticky }) => sticky && `
    position: sticky;
    top: 46px;
  `}
`;

export default { SectionHeader };
