import React, { useEffect } from 'react';
import { setPageTitle } from '@utils';

import styled from './styled';

const Settings = () => {
  useEffect(() => {
    setPageTitle('Settings');
  }, []);

  return (
    <styled.Settings>
      Settings
    </styled.Settings>
  );
};

export default Settings;
