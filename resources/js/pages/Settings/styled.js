import styled from 'styled-components';

const Settings = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const Setting = styled.li`
  align-items: center;
  margin: 0.5rem 0;
  display: flex;
`;

const SettingName = styled.span`
  margin-right: 1rem;

  * + & {
    margin-left: 1rem;
    margin-right: 0;
  }
`;

export default { Settings, Setting, SettingName };
