import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme, setMainColor, getContactList } from '@store/actions';
import { setPageTitle } from '@utils';
import { getTheme } from '@utils/color';

import PageHeader from '@components/PageHeader';
import Section from '@components/Section';
import ToggleButton from '@components/ToggleButton';
import ColorSelector from '@components/ColorSelector';

import styled from './styled';

const Settings = () => {
  useEffect(() => {
    setPageTitle('Settings');
  }, []);

  const dispatch = useDispatch();

  const toggleLastnameFirst = (active) => {
    if (active)
      localStorage.setItem('orderLastnameFirst', active);
    else
      localStorage.removeItem('orderLastnameFirst');

    dispatch(getContactList());
  };

  const toggleFavoriteIcon = (active) => {
    if (active)
      localStorage.setItem('showFavoriteIcon', active);
    else
      localStorage.removeItem('showFavoriteIcon');

    dispatch(getContactList());
  };

  const toggleFavoritesOnly = (active) => {
    if (active)
      localStorage.setItem('favoritesOnly', active);
    else
      localStorage.removeItem('favoritesOnly');

    dispatch(getContactList());
  };

  const toggleDarkTheme = (active) => {
    if (active)
      localStorage.setItem('darkTheme', active);
    else
      localStorage.removeItem('darkTheme');

    dispatch(setTheme(getTheme()));
  };

  const changeMainColor = (color) => {
    localStorage.setItem('mainColor', color);
    dispatch(setMainColor(color));
  };

  return (
    <styled.Settings>
      <PageHeader
        title="Settings"
      />
      <Section title="Contacts">
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
      </Section>
      <Section title="Colors">
        <styled.Setting>
          <ToggleButton
            initialState={!!localStorage.getItem('darkTheme')}
            handleClick={toggleDarkTheme}
          />
          <styled.SettingName>Use dark theme</styled.SettingName>
        </styled.Setting>
        <styled.Setting>
          <ColorSelector
            color="green"
            handleClick={changeMainColor}
            label="Green"
          />
          <ColorSelector
            color="orange"
            handleClick={changeMainColor}
            label="Orange"
          />
          <ColorSelector
            color="purple"
            handleClick={changeMainColor}
            label="Purple"
          />
          <styled.SettingName>Test main color</styled.SettingName>
        </styled.Setting>
      </Section>
    </styled.Settings>
  );
};

export default Settings;
