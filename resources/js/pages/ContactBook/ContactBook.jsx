import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { getAppData, getContactList, getContact } from '@store/actions';
import GlobalStyle from '@theme/globalStyle';
import { palette, color } from '@theme/palette';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import ContactList from '@components/ContactList';
import MainContainer from '@components/MainContainer';
import Dashboard from '@pages/Dashboard';
import Contact from '@pages/Contact';
import ContactForm from '@pages/ContactForm';
import ContactsByYear from '@pages/ContactsByYear';
import Birthdays from '@pages/Birthdays';
import Settings from '@pages/Settings';
import NotFound from '@pages/NotFound';

import styled from './styled';

const ContactBook = () => {
  const dispatch = useDispatch();

  const themeData = useSelector((state) => state.themeData);
  const { theme, mainColor } = themeData || {};

  useEffect(() => {
    window.addEventListener('load', () => {
      document.body.classList.remove('preload');
    });
    dispatch(getAppData());
    dispatch(getContactList());
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={{ selected: palette[theme], mainColor: color[mainColor] }}>
        <GlobalStyle />
        <styled.ContactBook>
          <Header />
          <styled.Main>
            <Sidebar>
              <ContactList hasSearch />
            </Sidebar>
            <MainContainer>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/contacts" />
                </Route>
                <Route path="/contacts" exact>
                  <Dashboard />
                </Route>
                <Route path="/contacts/year">
                  <ContactsByYear />
                </Route>
                <Route path="/contacts/new">
                  <ContactForm />
                </Route>
                <Route
                  path="/contacts/:id/edit"
                  render={({ match }) => {
                    const { id } = match.params || {};
                    dispatch(getContact(id));
                    return <ContactForm edit />;
                  }}
                />
                <Route
                  path="/contacts/:id?"
                  render={({ match }) => {
                    const { id } = match.params || {};
                    dispatch(getContact(id));
                    return <Contact />;
                  }}
                />
                <Route path="/birthdays">
                  <Birthdays />
                </Route>
                <Route path="/settings">
                  <Settings />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </MainContainer>
          </styled.Main>
          <Footer />
        </styled.ContactBook>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default ContactBook;
