import styled from 'styled-components';
import { responsive } from '@theme/mixins';

const Settings = styled.div`
  width: 100%;

  ${responsive.tablet`
    position: absolute;
    top: 0;
  `}
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
