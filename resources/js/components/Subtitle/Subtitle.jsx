import React from 'react';
import { node, string } from 'prop-types';

import styled from './styled';

const Subtitle = ({ children, className }) => <styled.Subtitle className={className}>{ children }</styled.Subtitle>;

Subtitle.propTypes = {
  children: node,
  className: string
};

Subtitle.defaultProps = {
  children: '',
  className: ''
};

export default Subtitle;
