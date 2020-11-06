import React from 'react';
import { oneOfType, string, element, node } from 'prop-types';

import styled from './styled';

const PageHeader = ({ children, className }) => <styled.PageHeader className={className}>{ children }</styled.PageHeader>;

PageHeader.propTypes = {
  children: oneOfType([string, element, node]),
  className: string
};

PageHeader.defaultProps = {
  children: '',
  className: ''
};

export default PageHeader;
