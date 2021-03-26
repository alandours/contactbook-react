import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toggleContactList } from '@store/actions';

import Icon from '@components/Icon';
import Navigation from './components/Navigation';

import styled from './styled';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const contactListOpen = useSelector((state) => state && state.contactList && state.contactList.open);

  const logoSrc = `${process.env.MIX_BASE_URL}/favicon-32x32.png`;

  useEffect(() => {
    if (contactListOpen)
      dispatch(toggleContactList());
  }, [location]);

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
          <styled.Logo src={logoSrc} alt="ContactBook" />
        </styled.Sitelink>
      </styled.Sitename>
      <Navigation />
    </styled.Header>
  );
};

export default Header;
