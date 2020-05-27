import React from 'react';

import Navigation from '@components/Navigation';

import styled from './styled';

const Header = () => (
  <styled.Header>
    <styled.Sitename>
      <styled.Sitelink to="/">
        ContactBook
      </styled.Sitelink>
    </styled.Sitename>
    <Navigation />
  </styled.Header>
);

export default Header;
