import React from 'react';
import { oneOfType, string, element } from 'prop-types';

import styled from './styled';

const RoundLink = ({ to, title, children, ...rest }) => (
  <styled.RoundLink to={to} title={title} {...rest}>
    { children }
  </styled.RoundLink>
);

RoundLink.propTypes = {
  to: string,
  title: string,
  children: oneOfType([string, element])
};

RoundLink.defaultProps = {
  to: '',
  title: '',
  children: ''
};

export default RoundLink;
