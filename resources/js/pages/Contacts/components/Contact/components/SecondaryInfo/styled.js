import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { size, weight } from '@theme/typography';

const SecondaryInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Notes = styled.p`
  margin: 1rem 0;
  padding: 0.25rem 1.75rem;
  white-space: pre-wrap;
`;

export default { SecondaryInfo, Notes };
