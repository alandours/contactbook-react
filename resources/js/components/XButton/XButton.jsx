import React from 'react';
import { string, func } from 'prop-types';

import Icon from '@components/Icon';

import styled from './styled';

const XButton = ({ type, handleClick, className }) => (
  <styled.XButton
    type={type}
    handleClick={handleClick}
    className={className}
  >
    <Icon icon="times" />
  </styled.XButton>
);

XButton.propTypes = {
  type: string,
  handleClick: func,
  className: string
};

XButton.defaultProps = {
  type: '',
  handleClick: () => {},
  className: ''
};

export default XButton;
