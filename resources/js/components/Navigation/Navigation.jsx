import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from './styled';

const Navigation = () => (
  <styled.Navigation>
    <styled.HeaderLink to="/contacts/new">
      <FontAwesomeIcon icon="plus" />
    </styled.HeaderLink>
    <styled.HeaderLink to="/settings">
      <FontAwesomeIcon icon="cog" />
    </styled.HeaderLink>
  </styled.Navigation>
);

export default Navigation;
