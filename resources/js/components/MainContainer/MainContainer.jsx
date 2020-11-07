import React from 'react';
import { oneOfType, string, element, node } from 'prop-types';

import styled from './styled';

const MainContainer = ({ children }) => (
  <styled.MainContainer>
    { children }
  </styled.MainContainer>
);

MainContainer.propTypes = {
  children: oneOfType([string, element, node])
};

MainContainer.defaultProps = {
  children: ''
};

export default MainContainer;
