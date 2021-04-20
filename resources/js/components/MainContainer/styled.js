import styled from 'styled-components';
import { responsive } from '@theme/mixins';

const MainContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.selected.main[1]};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0;
  overflow: scroll;
  position: relative;
  transition: all 420ms ease;
  transition-property: background, box-shadow;
  width: 100%;

  ${responsive.tablet`
    border-radius: 8px; 
    box-shadow: 0 2px 6px 0 ${({ theme }) => theme.selected.main.shadow};
    margin-left: 1rem;
    width: 75%;
    height: 80vh;
  `}
`;

export default { MainContainer };
