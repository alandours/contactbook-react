import React from 'react';
import { oneOfType, array, string, element, func } from 'prop-types';

import styled from './styled';

const Button = ({ children, type, variant, handleClick }) => (
  <styled.Button
    type={type}
    onClick={handleClick}
    variant={variant}
  >
    { children }
  </styled.Button>
);

Button.propTypes = {
  children: oneOfType([array, string, element]),
  type: string.isRequired,
  variant: string,
  handleClick: func
};

Button.defaultProps = {
  children: '',
  variant: '',
  handleClick: () => {}
};

export default Button;
