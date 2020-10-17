import React from 'react';
import { connect } from 'react-redux';
import { objectOf, any, bool } from 'prop-types';

import styled from './styled';

const mapStateToProps = (state) => state;

const Gradient = ({ contact, smooth }) => {
  const { palette } = contact || {};

  return (
    <styled.Gradient
      palette={palette}
      smooth={smooth}
    />
  );
};

Gradient.propTypes = {
  contact: objectOf(any).isRequired,
  smooth: bool
};

Gradient.defaultProps = {
  smooth: true
};

export default connect(mapStateToProps)(Gradient);
