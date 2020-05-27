import React from 'react';

import Navigation from '@components/Navigation';

import styled from './styled';

const Header = () => (
  <styled.Header>
    <styled.Sitename>
      <styled.Sitelink to="/">
        {process.env.MIX_APP_NAME}
      </styled.Sitelink>
    </styled.Sitename>
    <Navigation />
  </styled.Header>
);

export default Header;
