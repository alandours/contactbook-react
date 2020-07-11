import React from 'react';
import { arrayOf, string, bool } from 'prop-types';

import styled from './styled';

const Gradient = ({ palette, smooth }) => (
  <styled.Gradient
    palette={palette}
    smooth={smooth}
  />
);

Gradient.propTypes = {
  palette: arrayOf(string).isRequired,
  smooth: bool
};

Gradient.defaultProps = {
  smooth: true
};

export default Gradient;
