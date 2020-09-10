import React from 'react';
import { string, func } from 'prop-types';

import Icon from '@components/Icon';

import styled from './styled';

const RemoveButton = ({ type, handleClick }) => (
  <styled.RemoveButton
    type={type}
    onClick={handleClick}
  >
    <Icon icon="times" />
  </styled.RemoveButton>
);

RemoveButton.propTypes = {
  type: string,
  handleClick: func
};

RemoveButton.defaultProps = {
  type: '',
  handleClick: () => {}
};

export default RemoveButton;
