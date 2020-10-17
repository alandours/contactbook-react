import React from 'react';
import { string, bool, arrayOf } from 'prop-types';

import styled from './styled';

const Icon = ({ icon, color, inline }) => (
  <styled.Icon
    icon={icon}
    color={color}
    inline={inline ? 1 : 0}
  />
);

Icon.propTypes = {
  icon: string.isRequired,
  color: arrayOf(string),
  inline: bool
};

Icon.defaultProps = {
  color: [],
  inline: false
};

export default Icon;
