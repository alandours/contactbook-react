import React from 'react';
import { string, bool } from 'prop-types';

import styled from './styled';

const Icon = ({ icon, inline }) => <styled.Icon icon={icon} inline={inline ? 1 : 0} />;

Icon.propTypes = {
  icon: string.isRequired,
  inline: bool
};

Icon.defaultProps = {
  inline: false
};

export default Icon;
