import styled from 'styled-components';

const SecondaryInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Notes = styled.p`
  color: ${({ theme }) => theme.selected.contrast[1]};
  margin: 1rem 0;
  padding: 0.25rem 1.75rem;
  white-space: pre-wrap;
`;

export default { SecondaryInfo, Notes };
