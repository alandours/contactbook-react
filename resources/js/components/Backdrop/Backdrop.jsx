import React from 'react';
import { element, func } from 'prop-types';

import styled from './styled';

const Backdrop = ({ children, handleClick }) => {
  return (
    <styled.Backdrop
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      { children }
    </styled.Backdrop>
  );
};

Backdrop.propTypes = {
  children: element.isRequired,
  handleClick: func.isRequired
};

export default Backdrop;
