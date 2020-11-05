import styled from 'styled-components';
import { weight, size } from '@theme/typography';
import zindex from '@theme/zindex';

const Settings = styled.div`
  display: flex;
  margin: auto;
  width: 1000px;
`;

const SettingsList = styled.ul`
`;

const Setting = styled.li`
  align-items: center;
  display: flex;
`;

const SettingName = styled.span`
  margin-left: 1rem;
`;

export default { Settings, SettingsList, Setting, SettingName };
