import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { bool } from 'prop-types';
import { isArrayNotEmpty, getFirstLetter, formatFullName } from '@utils';

import InputIcon from '@components/InputIcon';
import ListItem from '@components/ListItem';
import Loader from '@components/Loader';

const buildContactList = (contacts) => {
  const list = [];
  let firstLetter = '';

  contacts.forEach((contact) => {
    const { id, name, lastname } = contact;
    const fullName = formatFullName(name, lastname);

    if (firstLetter !== getFirstLetter(fullName)) {
      firstLetter = getFirstLetter(fullName);
      list.push(<ListItem type="letter" key={firstLetter}>{firstLetter}</ListItem>);
    }

    list.push(<ListItem id={id} key={id}>{fullName}</ListItem>);
  });

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
        <ul>
          { contactList }
          <ListItem type="count">{`${contacts.length} contacts`}</ListItem>
        </ul>
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
