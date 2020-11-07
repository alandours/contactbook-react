import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { getContact } from '@store/actions';
import { func } from 'prop-types';

import Sidebar from '@components/Sidebar';
import MainContainer from '@components/MainContainer';
import ContactList from '@components/ContactList';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Birthdays from './components/Birthdays';
import StatsByYear from './components/StatsByYear';

import styled from './styled';

const mapDispatchToProps = {
  getContact
};

const Contacts = ({ getContact }) => (
  <styled.Contacts>
    <Sidebar>
      <ContactList hasSearch />
    </Sidebar>
    <MainContainer>
      <Switch>
        <Route path="/contacts" exact>
          <Dashboard />
        </Route>
        <Route path="/contacts/birthdays">
          <Birthdays />
        </Route>
        <Route path="/contacts/year">
          <StatsByYear />
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
    </MainContainer>
  </styled.Contacts>
);

Contacts.propTypes = {
  getContact: func
};

Contacts.defaultProps = {
  getContact: () => {}
};

export default connect(null, mapDispatchToProps)(Contacts);
