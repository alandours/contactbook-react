import styled from 'styled-components';
import { getColor } from '@theme/mixins';

const ToggleContainer = styled.div`
  background: ${getColor('grey', 'lighter')};
  box-shadow: inset 4px 2px 9px 0 rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  display: flex;
  height: 15px;
  justify-content: flex-start;
  width: 30px;

  ${({ active }) => !!active && `
    background: ${getColor('primary', 'main')};
    justify-content: flex-end;
  `}
`;

const ToggleButton = styled.div`
  background: ${getColor('grey', 'lighter')};
  border: 1px solid ${getColor('grey', 'normal')};
  box-shadow: 1px 0 1px 0 ${getColor('grey', 'normal')};
  border-radius: 40px;
  width: 50%;
`;

export default { ToggleContainer, ToggleButton };
