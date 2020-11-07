import styled from 'styled-components';

const MainContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.selected.main[1]};
  border-radius: 8px; 
  box-shadow: 0 2px 6px 0 ${({ theme }) => theme.selected.main.shadow};
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  margin-left: 1rem;
  overflow: hidden;
  position: relative;
  width: 75%;
`;

export default { MainContainer };
