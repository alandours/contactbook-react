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
      localStorage.setItem('orderByLastnameFirst', active);
    else
      localStorage.removeItem('orderByLastnameFirst');

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

  const toggleShowAge = (active) => {
    if (active)
      localStorage.setItem('showAge', active);
    else
      localStorage.removeItem('showAge');

    dispatch(setTheme(getTheme()));
  };

  const toggleShowPhoto = (active) => {
    if (active)
      localStorage.setItem('showPhoto', active);
    else
      localStorage.removeItem('showPhoto');

    dispatch(setTheme(getTheme()));
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
            initialState={!!localStorage.getItem('orderByLastnameFirst')}
            handleClick={toggleLastnameFirst}
          />
          <styled.SettingName>Order by last name</styled.SettingName>
        </styled.Setting>
        <styled.Setting>
          <ToggleButton
            initialState={!!localStorage.getItem('showAge')}
            handleClick={toggleShowAge}
          />
          <styled.SettingName>Show age</styled.SettingName>
        </styled.Setting>
        <styled.Setting>
          <ToggleButton
            initialState={!!localStorage.getItem('showPhoto')}
            handleClick={toggleShowPhoto}
          />
          <styled.SettingName>Show photo</styled.SettingName>
        </styled.Setting>
        <styled.Setting>
          <ToggleButton
            initialState={!!localStorage.getItem('showFavoriteIcon')}
            handleClick={toggleFavoriteIcon}
          />
          <styled.SettingName>Show favorite icon</styled.SettingName>
        </styled.Setting>
        <styled.Setting>
          <ToggleButton
            initialState={!!localStorage.getItem('favoritesOnly')}
            handleClick={toggleFavoritesOnly}
          />
          <styled.SettingName>Show favorites only</styled.SettingName>
        </styled.Setting>
      </Section>
      <Section title="Colors">
        <styled.Setting>
          <ToggleButton
            initialState={!!localStorage.getItem('darkTheme')}
            handleClick={toggleDarkTheme}
          />
          <styled.SettingName>Dark theme</styled.SettingName>
        </styled.Setting>
        <styled.Setting>
          <styled.SettingName>Main color:</styled.SettingName>
          <ColorSelector
            color="green"
            handleClick={changeMainColor}
          />
          <ColorSelector
            color="orange"
            handleClick={changeMainColor}
          />
          <ColorSelector
            color="purple"
            handleClick={changeMainColor}
          />
        </styled.Setting>
      </Section>
    </styled.Settings>
  );
};

export default Settings;
