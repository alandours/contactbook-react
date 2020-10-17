import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { func } from 'prop-types';

import { getAppData } from '@store/actions';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Contacts from '@pages/Contacts';

import styled from './styled';

const mapDispatchToProps = {
  getAppData
};

const ContactBook = ({ getAppData }) => {
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
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/settings">
              <div>Settings</div>
            </Route>
          </Switch>
        </styled.MainContainer>
        <Footer />
      </styled.ContactBook>
    </BrowserRouter>
  );
};

ContactBook.propTypes = {
  getAppData: func
};

ContactBook.defaultProps = {
  getAppData: () => {}
};

export default connect(null, mapDispatchToProps)(ContactBook);
