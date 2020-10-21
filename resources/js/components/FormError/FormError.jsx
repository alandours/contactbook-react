import React from 'react';

import styled from './styled';

const FormError = ({ children }) => {
  return !!children && (
    <styled.FormError>{ children }</styled.FormError>
  );
};

export default FormError;
