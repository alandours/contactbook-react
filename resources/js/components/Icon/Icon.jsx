import React from 'react';
import { oneOfType, string, bool, arrayOf } from 'prop-types';

import styled from './styled';

const Icon = ({ icon, color, colortype, inline }) => (
  <styled.Icon
    icon={icon}
    color={color}
    colortype={colortype}
    inline={inline ? 1 : 0}
  />
);

Icon.propTypes = {
  icon: oneOfType([string, arrayOf(string)]).isRequired,
  color: string,
  colortype: string,
  inline: bool
};

Icon.defaultProps = {
  color: '',
  colortype: '',
  inline: false
};

export default Icon;
