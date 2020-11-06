import React from 'react';
import { string } from 'prop-types';

import styled from './styled';

const Subtitle = ({ children }) => <styled.Subtitle>{ children }</styled.Subtitle>;

Subtitle.propTypes = {
  children: string
};

Subtitle.defaultProps = {
  children: ''
};

export default Subtitle;
