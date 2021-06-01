import React from 'react';
import { useDispatch } from 'react-redux';
import { setTheme, getContactList } from '@store/actions';
import { getTheme } from '@utils/color';

import Section from '@components/Section';
import ToggleButton from '@components/ToggleButton';

import Setting from '../Setting';

const ContactsSettings = () => {
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

  return (
    <Section title="Contacts">
      <Setting label="Order by last name">
        <ToggleButton
          initialState={!!localStorage.getItem('orderByLastnameFirst')}
          handleClick={toggleLastnameFirst}
        />
      </Setting>
      <Setting label="Show age">
        <ToggleButton
          initialState={!!localStorage.getItem('showAge')}
          handleClick={toggleShowAge}
        />
      </Setting>
      <Setting label="Show photo">
        <ToggleButton
          initialState={!!localStorage.getItem('showPhoto')}
          handleClick={toggleShowPhoto}
        />
      </Setting>
      <Setting label="Show favorite icon">
        <ToggleButton
          initialState={!!localStorage.getItem('showFavoriteIcon')}
          handleClick={toggleFavoriteIcon}
        />
      </Setting>
      <Setting label="Show favorites only">
        <ToggleButton
          initialState={!!localStorage.getItem('favoritesOnly')}
          handleClick={toggleFavoritesOnly}
        />
      </Setting>
    </Section>
  );
};

export default ContactsSettings;
