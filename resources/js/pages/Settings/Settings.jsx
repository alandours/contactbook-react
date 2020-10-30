import React, { useEffect } from 'react';
import { setPageTitle } from '@utils';

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

  return (
    <styled.Settings>
      <Title>Settings</Title>
      <ul>
        <li>
          <ToggleButton
            initialState={!!localStorage.getItem('orderLastnameFirst')}
            handleClick={toggleLastnameFirst}
          />
          Order contacts by last name
        </li>
        <li>
          <ToggleButton
            initialState={!!localStorage.getItem('showFavoriteIcon')}
            handleClick={toggleFavoriteIcon}
          />
          Show favorite icon next to contacts
        </li>
      </ul>
    </styled.Settings>
  );
};

export default Settings;
