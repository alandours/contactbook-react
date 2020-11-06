import React from 'react';
import { oneOfType, array, string, element, func } from 'prop-types';

import styled from './styled';

const Button = ({ children, type, variant, handleClick, className }) => (
  <styled.Button
    type={type}
    onClick={handleClick}
    variant={variant}
    className={className}
  >
    { children }
  </styled.Button>
);

Button.propTypes = {
  children: oneOfType([array, string, element]),
  type: string.isRequired,
  variant: string,
  handleClick: func,
  className: string
};

Button.defaultProps = {
  children: '',
  variant: '',
  handleClick: () => {},
  className: ''
};

export default Button;
