import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { getAppData } from '@store/actions';
import GlobalStyle from '@theme/globalStyle';
import palette from '@theme/palette';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Contacts from '@pages/Contacts';
import Settings from '@pages/Settings';

import styled from './styled';

const ContactBook = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.classList.remove('preload');
    dispatch(getAppData());
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={{ selected: palette[theme] }}>
        <GlobalStyle />
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
                <Settings />
              </Route>
            </Switch>
          </styled.MainContainer>
          <Footer />
        </styled.ContactBook>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default ContactBook;
