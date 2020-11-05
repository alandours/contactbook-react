import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { weight, size } from '@theme/typography';
import zindex from '@theme/zindex';

const SectionHeader = styled.h2`
  background: ${getColor('main', 3)};
  border-bottom: 2px solid ${getColor('main', 'shadow')};
  color: ${getColor('contrast', 1)};
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
