import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { size, weight } from '@theme/typography';
import zindex from '@theme/zindex';

const FixedInfo = styled.div`
  background: ${getColor('common', 'white')};
  display: flex;
  min-height: 46px;
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  z-index: ${zindex.fixed};
`;

const Name = styled.p`
  align-items: center;
  display: flex;
  font-size: ${size.normal};
  font-weight: ${weight.bold};
`;

export default { FixedInfo, Name };
