import React, { useEffect, useRef } from 'react';
import { element, func } from 'prop-types';

import styled from './styled';

const Backdrop = ({ children, handleClick, handleKeyDown }) => {
  const backdropRef = useRef(null);

  useEffect(() => {
    if (backdropRef.current)
      backdropRef.current.focus();
  }, []);

  return (
    <styled.Backdrop
      ref={backdropRef}
      tabIndex="0"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key.toLowerCase() === 'escape') handleKeyDown();
      }}
    >
      { children }
    </styled.Backdrop>
  );
};

Backdrop.propTypes = {
  children: element.isRequired,
  handleClick: func.isRequired,
  handleKeyDown: func.isRequired
};

export default Backdrop;
