import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { bool } from 'prop-types';
import { isArrayNotEmpty, getFirstLetter, formatFullName } from '@utils';

import InputIcon from '@components/InputIcon';
import ListItem from '@components/ListItem';
import Loader from '@components/Loader';

import styled from './styled';

const buildContactList = (contacts) => {
  const groups = contacts.reduce((acc, contact) => {
    const { id, name, lastname } = contact;
    const fullName = formatFullName(name, lastname);
    const letter = getFirstLetter(fullName);

    const listItem = <ListItem id={id} key={id}>{fullName}</ListItem>;
    acc[letter] = acc[letter] ? [...acc[letter], listItem] : [listItem];

    return acc;
  }, {});

  const list = Object.keys(groups).map((letter) => (
    <styled.ContactGroup key={letter}>
      <ListItem type="letter" sticky>{letter}</ListItem>
      { groups[letter] }
    </styled.ContactGroup>
  ));

  return list;
};

const ContactList = ({ hasSearch }) => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const getContacts = async (value) => {
    const url = value ? `/api/contacts/search/${search}` : '/api/contacts/list';
    const response = await axios.get(url);
    setLoading(false);
    setContacts(response.data);
  };

  useEffect(() => {
    getContacts(search);
  }, [search]);

  const contactList = isArrayNotEmpty(contacts) && buildContactList(contacts);

  return (
    <>
      { hasSearch && (
        <InputIcon
          icon="search"
          placeholder="Search contacts"
          handleTyping={(e) => setSearch(e.target.value)}
        />
      )}
      { loading ? <Loader /> : (
        <div>
          { contactList }
          <ListItem as="div" type="count">{`${contacts.length} contacts`}</ListItem>
        </div>
      )}
    </>
  );
};

ContactList.propTypes = {
  hasSearch: bool
};

ContactList.defaultProps = {
  hasSearch: false
};

export default ContactList;
