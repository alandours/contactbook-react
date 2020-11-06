import styled, { css } from 'styled-components';

const ToggleContainer = styled.div`
  background: ${({ theme }) => theme.selected.main[3]};
  box-shadow: inset 4px 2px 9px 0 rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  display: flex;
  height: 15px;
  justify-content: flex-start;
  width: 30px;

  ${({ active }) => !!active && css`
    background: ${({ theme }) => theme.mainColor.main};
    justify-content: flex-end;
  `}
`;

const ToggleButton = styled.div`
  background: ${({ theme }) => theme.selected.main[2]};
  border: 1px solid ${({ theme }) => theme.selected.contrast[4]};
  box-shadow: 1px 0 1px 0 ${({ theme }) => theme.selected.main.shadow};
  border-radius: 40px;
  width: 50%;
`;

export default { ToggleContainer, ToggleButton };
