import React from 'react';
import { string } from 'prop-types';

import Container from '@components/Container';
import ContactList from '@components/ContactList';
import ContactView from '@components/ContactView';

import styled from './styled';

const Contacts = ({ id }) => {
  return (
    <styled.Contacts>
      <Container type="sidebar">
        <ContactList hasSearch />
      </Container>
      <Container type="main">
        <ContactView id={id} />
      </Container>
    </styled.Contacts>
  );
};

Contacts.propTypes = {
  id: string
};

Contacts.defaultProps = {
  id: '1'
};

export default Contacts;
