import React from 'react';
import { string, func } from 'prop-types';

import styled from './styled';

const Input = ({ type, placeholder, handleTyping }) => (
  <styled.Input
    type={type}
    placeholder={placeholder}
    onKeyUp={handleTyping}
  />
);

Input.propTypes = {
  type: string,
  placeholder: string,
  handleTyping: func,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  handleTyping: () => {}
};

export default Input;
