import React from 'react';
import { oneOfType, string, element, node } from 'prop-types';

import styled from './styled';

const PageHeader = ({ children, ...rest }) => <styled.PageHeader {...rest}>{ children }</styled.PageHeader>;

PageHeader.propTypes = {
  children: oneOfType([string, element, node])
};

PageHeader.defaultProps = {
  children: ''
};

export default PageHeader;
