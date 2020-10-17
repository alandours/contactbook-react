import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyle from '@theme/globalStyle';
import iconLibrary from '@utils/iconLibrary';

import ContactBook from '@pages/ContactBook';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ContactBook />
  </Provider>, document.getElementById('contact-book')
);
