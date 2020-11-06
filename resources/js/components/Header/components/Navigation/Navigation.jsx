import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from './styled';

const Navigation = () => (
  <styled.Navigation>
    <styled.HeaderLink to="/contacts/new">
      <FontAwesomeIcon icon="plus" />
      <styled.HeaderLinkText>Add contact</styled.HeaderLinkText>
    </styled.HeaderLink>
    <styled.HeaderLink to="/settings">
      <FontAwesomeIcon icon="cog" />
      <styled.HeaderLinkText>Settings</styled.HeaderLinkText>
    </styled.HeaderLink>
  </styled.Navigation>
);

export default Navigation;
