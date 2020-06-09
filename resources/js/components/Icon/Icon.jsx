import React from 'react';
import { string } from 'prop-types';

import styled from './styled';

const Icon = ({ icon }) => <styled.Icon icon={icon} />;

Icon.propTypes = {
  icon: string.isRequired
};

export default Icon;
