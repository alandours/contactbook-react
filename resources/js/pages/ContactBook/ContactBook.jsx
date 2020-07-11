import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { string, func } from 'prop-types';

import { getContact, getAppData } from '@store/actions';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Contacts from '@pages/Contacts';

import styled from './styled';

const mapStateToProps = (state) => {
  const { id } = state.contact || {};
  const contactId = id ? id.toString() : '';
  return { contactId };
};

const mapDispatchToProps = {
  getContact,
  getAppData
};

const ContactBook = ({ contactId, getContact, getAppData }) => {
  useEffect(() => {
    getAppData();
  }, []);

  return (
    <BrowserRouter>
      <styled.ContactBook>
        <Header />
        <styled.MainContainer>
          <Switch>
            <Route exact path="/">
              <Redirect to="/contacts" />
            </Route>
            <Route
              path="/contacts/:id?"
              render={({ match }) => {
                const { id = '1' } = match.params || {};
                if (!contactId || contactId !== id) getContact(id);
                return <Contacts />;
              }}
            />
          </Switch>
        </styled.MainContainer>
        <Footer />
      </styled.ContactBook>
    </BrowserRouter>
  );
};

ContactBook.propTypes = {
  contactId: string,
  getContact: func,
  getAppData: func
};

ContactBook.defaultProps = {
  contactId: '',
  getContact: () => {},
  getAppData: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactBook);
