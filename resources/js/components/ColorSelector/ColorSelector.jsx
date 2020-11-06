import React from 'react';
import { string, func } from 'prop-types';

import styled from './styled';

const ColorSelector = ({ color, label, handleClick }) => (
  <styled.ColorSelector onClick={() => handleClick(color)}>
    <styled.ColorBox selectorColor={color} />
    { label && <styled.Label>{ label }</styled.Label> }
  </styled.ColorSelector>
);

ColorSelector.propTypes = {
  color: string,
  label: string,
  handleClick: func
};

ColorSelector.defaultProps = {
  color: '',
  label: '',
  handleClick: () => {}
};

export default ColorSelector;
