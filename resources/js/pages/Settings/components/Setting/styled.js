import styled from 'styled-components';

const Setting = styled.li`
  align-items: center;
  margin: 0.5rem 0;
  display: flex;
`;

const SettingLabel = styled.span`
  margin-left: 1rem;
  transition: all 420ms ease;
  transition-property: color;

  ${({ labelFirst }) => !!labelFirst && `
    margin-right: 1rem;
    margin-left: 0;
    order: -10;
  `}
`;

export default { Setting, SettingLabel };
