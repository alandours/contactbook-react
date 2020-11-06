import React from 'react';
import { oneOfType, string, element, node } from 'prop-types';

import styled from './styled';

const ErrorMessage = ({ children }) => {
  return !!children && (
    <styled.ErrorMessage>{ children }</styled.ErrorMessage>
  );
};

ErrorMessage.propTypes = {
  children: oneOfType([string, element, node])
};

ErrorMessage.defaultProps = {
  children: ''
};

export default ErrorMessage;
