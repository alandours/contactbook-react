import React from 'react';
import { string, bool, oneOfType, element, objectOf, any } from 'prop-types';

import ContactLink from '@components/ContactLink';

import styled from './styled';

const ListItem = ({ type = 'contact', contact, sticky, children }) => {
  const showAge = !!localStorage.getItem('showAge');
  const showPhoto = !!localStorage.getItem('showPhoto');

  return (
    <styled.ListItem type={type} sticky={sticky}>
      {
        contact && contact.id ? (
          <ContactLink
            contact={contact}
            showAge={showAge}
            showPhoto={showPhoto}
          />
        ) : children
      }
    </styled.ListItem>
  );
};

ListItem.propTypes = {
  type: string,
  contact: objectOf(any),
  sticky: bool,
  children: oneOfType([string, element])
};

ListItem.defaultProps = {
  type: 'contact',
  contact: {},
  sticky: false,
  children: ''
};

export default ListItem;
