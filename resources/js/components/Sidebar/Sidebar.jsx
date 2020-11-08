import React from 'react';
import { useSelector } from 'react-redux';
import { oneOfType, string, element, node } from 'prop-types';

import styled from './styled';

const SideBar = ({ children }) => {
  const open = useSelector((state) => state && state.contactList && state.contactList.open);

  return (
    <styled.SideBar open={open}>
      { children }
    </styled.SideBar>
  );
};

SideBar.propTypes = {
  children: oneOfType([string, element, node])
};

SideBar.defaultProps = {
  children: ''
};

export default SideBar;
