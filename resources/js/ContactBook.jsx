import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faPlus, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Contacts from '@pages/Contacts';
import AddContact from '@pages/AddContact';
import EditContact from '@pages/EditContact';

import styled from './styled';

library.add(faCog, faPlus, faSearch, faSpinner);

const ContactBook = () => (
  <BrowserRouter>
    <styled.ContactBook>
      <Header />
      <styled.MainContainer>
        <Switch>
          <Route exact path="/">
            <Redirect to="/contacts" />
          </Route>
          <Route path="/contacts/add">
            <AddContact />
          </Route>
          <Route
            path="/contacts/:id/edit"
            render={({ match }) => <EditContact id={match.params.id} />}
          />
          <Route
            path="/contacts/:id?"
            render={({ match }) => {
              const { id } = match.params;
              return id ? <Contacts id={id} /> : <Redirect to="/contacts/1" />;
            }}
          />
        </Switch>
      </styled.MainContainer>
      <Footer />
    </styled.ContactBook>
  </BrowserRouter>
);

ReactDOM.render(<ContactBook />, document.getElementById('contact-book'));
