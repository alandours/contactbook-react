import styled from 'styled-components';

const SideBar = styled.div`
  background: ${({ theme }) => theme.selected.main[1]};
  border-radius: 8px; 
  box-shadow: 0 2px 6px 0 ${({ theme }) => theme.selected.main.shadow};
  min-height: 100%;
  max-height: 80vh;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  width: 25%;
`;

export default { SideBar };
