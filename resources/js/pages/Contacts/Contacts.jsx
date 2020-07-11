import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from '@components/Container';
import ContactList from '@components/ContactList';
import Contact from './components/Contact';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

import styled from './styled';

const Contacts = () => (
  <styled.Contacts>
    <Container type="sidebar">
      <ContactList hasSearch />
    </Container>
    <Container type="main">
      <Switch>
        <Route path="/contacts/new">
          <AddContact />
        </Route>
        <Route path="/contacts/:id/edit">
          <EditContact />
        </Route>
        <Route path="/contacts/:id?">
          <Contact />
        </Route>
      </Switch>
    </Container>
  </styled.Contacts>
);

export default Contacts;
