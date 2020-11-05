import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import iconLibrary from '@utils/iconLibrary';

import ContactBook from '@pages/ContactBook';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ContactBook />
  </Provider>, document.getElementById('contact-book')
);
