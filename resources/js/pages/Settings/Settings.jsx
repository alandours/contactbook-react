import React, { useEffect } from 'react';
import { setPageTitle } from '@utils';

import Container from '@components/Container';
import Title from '@components/Title';
import ToggleButton from '@components/ToggleButton';

import styled from './styled';

const Settings = () => {
  useEffect(() => {
    setPageTitle('Settings');
  }, []);

  const toggleLastnameFirst = (active) => {
    if (active)
      localStorage.setItem('orderLastnameFirst', active);
    else
      localStorage.removeItem('orderLastnameFirst');
  };

  const toggleFavoriteIcon = (active) => {
    if (active)
      localStorage.setItem('showFavoriteIcon', active);
    else
      localStorage.removeItem('showFavoriteIcon');
  };

  const toggleFavoritesOnly = (active) => {
    if (active)
      localStorage.setItem('favoritesOnly', active);
    else
      localStorage.removeItem('favoritesOnly');
  };

  return (
    <styled.Settings>
      <Container type="main">
        <Title>Settings</Title>
        <styled.SettingsList>
          <styled.Setting>
            <ToggleButton
              initialState={!!localStorage.getItem('orderLastnameFirst')}
              handleClick={toggleLastnameFirst}
            />
            <styled.SettingName>Order contacts by last name</styled.SettingName>
          </styled.Setting>
          <styled.Setting>
            <ToggleButton
              initialState={!!localStorage.getItem('showFavoriteIcon')}
              handleClick={toggleFavoriteIcon}
            />
            <styled.SettingName>Show favorite icon next to contacts</styled.SettingName>
          </styled.Setting>
          <styled.Setting>
            <ToggleButton
              initialState={!!localStorage.getItem('favoritesOnly')}
              handleClick={toggleFavoritesOnly}
            />
            <styled.SettingName>Show only favorite contacts</styled.SettingName>
          </styled.Setting>
        </styled.SettingsList>
      </Container>
    </styled.Settings>
  );
};

export default Settings;
