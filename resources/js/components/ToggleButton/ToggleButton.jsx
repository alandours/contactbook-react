import React, { useState, useEffect } from 'react';
import { bool, func } from 'prop-types';

import styled from './styled';

const ToggleButton = ({ initialState = false, handleClick }) => {
  const [active, setActive] = useState(initialState);

  useEffect(() => {
    handleClick(active);
  }, [active]);

  return (
    <styled.ToggleContainer
      onClick={() => setActive(!active)}
      active={active}
    >
      <styled.ToggleButton active={active} />
    </styled.ToggleContainer>
  );
};

ToggleButton.propTypes = {
  initialState: bool,
  handleClick: func
};

ToggleButton.defaultProps = {
  initialState: false,
  handleClick: () => {}
};

export default ToggleButton;
