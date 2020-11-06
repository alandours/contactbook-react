import styled from 'styled-components';

const ContactGroup = styled.ul`
  position: relative;
`;

const Count = styled.div`
  border-top: 1px solid ${({ theme }) => theme.selected.main[3]};
  color: ${({ theme }) => theme.selected.contrast[2]};
  padding: 1rem !important;
  text-align: center;
`;

const List = styled.div`
`;

export default { ContactGroup, Count, List };
