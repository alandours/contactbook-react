import React from 'react';
import { oneOfType, string, element, node } from 'prop-types';

import Title from '@components/Title';
import Subtitle from '@components/Subtitle';

import styled from './styled';

const PageHeader = ({ title, subtitle, children, className }) => (
  <styled.PageHeader className={className}>
    { !!title && <Title>{ title }</Title> }
    { !!subtitle && <Subtitle>{ subtitle }</Subtitle> }
    { children }
  </styled.PageHeader>
);

PageHeader.propTypes = {
  title: string,
  subtitle: string,
  children: oneOfType([string, element, node]),
  className: string
};

PageHeader.defaultProps = {
  title: '',
  subtitle: '',
  children: '',
  className: ''
};

export default PageHeader;
