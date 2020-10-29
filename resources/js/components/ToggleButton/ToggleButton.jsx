import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';

import styled from './styled';

const ToggleButton = ({ handleClick }) => {
  const [active, setActive] = useState(false);

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
  handleClick: func
};

ToggleButton.defaultProps = {
  handleClick: () => {}
};

export default ToggleButton;
