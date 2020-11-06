import React from 'react';
import { node, string } from 'prop-types';

import styled from './styled';

const Title = ({ children, className }) => <styled.Title className={className}>{ children }</styled.Title>;

Title.propTypes = {
  children: node,
  className: string
};

Title.defaultProps = {
  children: '',
  className: ''
};

export default Title;
