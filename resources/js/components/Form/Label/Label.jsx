import React from 'react';
import { string, bool, oneOfType, element, node } from 'prop-types';

import styled from './styled';

const Label = ({ label, disabled, children }) => {
  return (
    <styled.Label label={label}>
      { label && !disabled && <styled.LabelText>{ label }</styled.LabelText> }
      { children }
    </styled.Label>
  );
};

Label.propTypes = {
  label: string,
  disabled: bool,
  children: oneOfType([string, element, node])
};

Label.defaultProps = {
  label: '',
  disabled: false,
  children: ''
};

export default Label;
