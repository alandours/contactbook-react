import React from 'react';
import { oneOfType, string, number, bool, arrayOf } from 'prop-types';

import styled from './styled';

const Icon = ({ icon, color, inline }) => (
  <styled.Icon
    icon={icon}
    color={color}
    inline={inline ? 1 : 0}
  />
);

Icon.propTypes = {
  icon: oneOfType([string, arrayOf(string)]).isRequired,
  color: arrayOf(oneOfType([string, number])),
  inline: bool
};

Icon.defaultProps = {
  color: [],
  inline: false
};

export default Icon;
