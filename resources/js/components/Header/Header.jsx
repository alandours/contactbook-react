import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleContactList } from '@store/actions';

import Icon from '@components/Icon';
import Navigation from './components/Navigation';

import styled from './styled';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <styled.Header>
      <styled.Sitename>
        <styled.ToggleMenuButton
          type="button"
          onClick={() => dispatch(toggleContactList())}
        >
          <Icon icon="bars" />
        </styled.ToggleMenuButton>
        <styled.Sitelink to="/">
          {process.env.MIX_APP_NAME}
        </styled.Sitelink>
      </styled.Sitename>
      <Navigation />
    </styled.Header>
  );
};

export default Header;
