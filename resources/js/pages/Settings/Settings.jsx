import React, { useEffect } from 'react';
import { setPageTitle } from '@utils';

import PageHeader from '@components/PageHeader';
import ContactsSettings from './components/ContactsSettings';
import ColorSettings from './components/ColorSettings';

import styled from './styled';

const Settings = () => {
  useEffect(() => {
    setPageTitle('Settings');
  }, []);

  return (
    <styled.Settings>
      <PageHeader title="Settings" />
      <ContactsSettings />
      <ColorSettings />
    </styled.Settings>
  );
};

export default Settings;
