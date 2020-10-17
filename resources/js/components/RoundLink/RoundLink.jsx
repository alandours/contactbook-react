import React from 'react';
import { oneOfType, string, element } from 'prop-types';

import styled from './styled';

const RoundLink = ({ to, children }) => (
  <styled.RoundLink to={to}>
    { children }
  </styled.RoundLink>
);

RoundLink.propTypes = {
  to: string,
  children: oneOfType([string, element])
};

RoundLink.defaultProps = {
  to: '',
  children: ''
};

export default RoundLink;
