import React from 'react';
import { string, element, bool, node, oneOfType } from 'prop-types';

import styled from './styled';

const Setting = ({ label, labelFirst, children }) => (
  <styled.Setting>
    { children }
    <styled.SettingLabel labelFirst={labelFirst}>{ label }</styled.SettingLabel>
  </styled.Setting>
);

Setting.propTypes = {
  label: string,
  labelFirst: bool,
  children: oneOfType([string, element, node])
};

Setting.defaultProps = {
  label: '',
  labelFirst: false,
  children: ''
};

export default Setting;
