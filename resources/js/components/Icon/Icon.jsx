import React from 'react';
import { oneOfType, string, bool, arrayOf } from 'prop-types';

import styled from './styled';

const Icon = ({ icon, color, inline, className }) => (
  <styled.Icon
    icon={icon}
    color={color}
    inline={inline ? 1 : 0}
    className={className}
  />
);

Icon.propTypes = {
  icon: oneOfType([string, arrayOf(string)]).isRequired,
  color: arrayOf(string),
  inline: bool,
  className: string
};

Icon.defaultProps = {
  color: [],
  inline: false,
  className: ''
};

export default Icon;
