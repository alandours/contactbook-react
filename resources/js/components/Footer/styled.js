import styled from 'styled-components';

const Footer = styled.div`
  background: ${({ theme }) => theme.selected.main[1]};
  box-shadow: 0 2px 6px 0 ${({ theme }) => theme.selected.main.shadow};
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

export default { Footer };
