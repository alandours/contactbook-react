import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { size, weight } from '@theme/typography';

const SecondaryInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Notes = styled.p`
  margin-top: 1rem;
  padding: 0.25rem 1.75rem;
  white-space: pre-wrap;
`;

export default { SecondaryInfo, Notes };
