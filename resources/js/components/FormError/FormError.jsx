import React from 'react';
import { oneOfType, string, element, node } from 'prop-types';

import styled from './styled';

const FormError = ({ children }) => {
  return !!children && (
    <styled.FormError>{ children }</styled.FormError>
  );
};

FormError.propTypes = {
  children: oneOfType([string, element, node])
};

FormError.defaultProps = {
  children: ''
};

export default FormError;
