import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { func } from 'prop-types';

import { getContact } from '@store/actions';

import Container from '@components/Container';
import ContactList from '@components/ContactList';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';

import styled from './styled';

const mapDispatchToProps = {
  getContact
};

const Contacts = ({ getContact }) => (
  <styled.Contacts>
    <Container type="sidebar">
      <ContactList hasSearch />
    </Container>
    <Container type="main">
      <Switch>
        <Route path="/contacts" exact>
          <Dashboard />
        </Route>
        <Route path="/contacts/new">
          <ContactForm />
        </Route>
        <Route
          path="/contacts/:id/edit"
          render={({ match }) => {
            const { id } = match.params || {};
            getContact(id);
            return <ContactForm edit />;
          }}
        />
        <Route
          path="/contacts/:id?"
          render={({ match }) => {
            const { id } = match.params || {};
            getContact(id);
            return <Contact />;
          }}
        />
      </Switch>
    </Container>
  </styled.Contacts>
);

Contacts.propTypes = {
  getContact: func
};

Contacts.defaultProps = {
  getContact: () => {}
};

export default connect(null, mapDispatchToProps)(Contacts);
