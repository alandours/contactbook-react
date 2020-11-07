import React from 'react';
import { oneOfType, string, element, node } from 'prop-types';

import styled from './styled';

const SideBar = ({ children }) => (
  <styled.SideBar>
    { children }
  </styled.SideBar>
);

SideBar.propTypes = {
  children: oneOfType([string, element, node])
};

SideBar.defaultProps = {
  children: ''
};

export default SideBar;
