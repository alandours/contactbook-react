import React from 'react';
import { useDispatch } from 'react-redux';
import { setTheme, setMainColor } from '@store/actions';
import { getTheme } from '@utils/color';

import Section from '@components/Section';
import ToggleButton from '@components/ToggleButton';
import ColorSelector from '@components/ColorSelector';

import Setting from '../Setting';

const ColorSettings = () => {
  const dispatch = useDispatch();

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
    <Section title="Colors">
      <Setting label="Dark theme">
        <ToggleButton
          initialState={!!localStorage.getItem('darkTheme')}
          handleClick={toggleDarkTheme}
        />
      </Setting>
      <Setting label="Main Color:" labelFirst>
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
      </Setting>
    </Section>
  );
};

export default ColorSettings;
