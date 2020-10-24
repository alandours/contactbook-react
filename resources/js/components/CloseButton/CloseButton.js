import React from 'react';
import { string, func } from 'prop-types';

import styled from './styled';

const CloseButton = ({ type, handleClick, ...rest }) => (
  <styled.CloseButton
    type={type}
    onClick={handleClick}
    {...rest}
  >
    <styled.RemoveIcon icon="times" />
  </styled.CloseButton>
);

CloseButton.propTypes = {
  type: string,
  handleClick: func
};

CloseButton.defaultProps = {
  type: '',
  handleClick: () => {}
};

export default CloseButton;
