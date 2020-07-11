import React from 'react';
import { bool, string } from 'prop-types';

import Icon from '@components/Icon';

import styled from './styled';

const SectionHeader = ({ sticky, icon, title }) => (
  <styled.SectionHeader sticky={sticky}>
    { !!icon && <Icon icon={icon} inline />}
    { title }
  </styled.SectionHeader>
);

SectionHeader.propTypes = {
  sticky: bool,
  icon: string,
  title: string
};

SectionHeader.defaultProps = {
  sticky: false,
  icon: '',
  title: ''
};

export default SectionHeader;
