import React from 'react';
import { node } from 'prop-types';

import styled from './styled';

const Title = ({ children }) => <styled.Title>{ children }</styled.Title>;

Title.propTypes = {
  children: node
};

Title.defaultProps = {
  children: ''
};

export default Title;
