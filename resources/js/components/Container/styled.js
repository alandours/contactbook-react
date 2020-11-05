import styled, { css } from 'styled-components';

const Container = styled.div`
  background: ${({ theme }) => theme.selected.main[1]};
  border-radius: 8px; 
  box-shadow: 0 2px 6px 0 ${({ theme }) => theme.selected.main.shadow};
  position: relative;

  ${({ type }) => type === 'main' && css`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    margin-left: 1rem;
    overflow: hidden;
    width: 75%;
  `}

  ${({ type }) => type === 'sidebar' && css`
    min-height: 100%;
    max-height: 80vh;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 25%;
  `}
`;

export default { Container };
