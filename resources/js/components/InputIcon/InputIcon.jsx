import React from 'react';
import { string, func } from 'prop-types';

import Input from '@components/Input';

import styled from './styled';

const InputIcon = ({ icon, placeholder, handleTyping }) => (
  <styled.InputIcon>
    <styled.Icon icon={icon} />
    <Input
      type="search"
      placeholder={placeholder}
      handleTyping={handleTyping}
    />
  </styled.InputIcon>
);

InputIcon.propTypes = {
  icon: string.isRequired,
  placeholder: string,
  handleTyping: func
};

InputIcon.defaultProps = {
  placeholder: '',
  handleTyping: () => {}
};

export default InputIcon;
