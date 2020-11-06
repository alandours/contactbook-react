import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bool, objectOf, any, func } from 'prop-types';
import { getContactList } from '@store/actions';
import { getFirstLetter } from '@utils/contacts';

import SearchInput from '@components/SearchInput';
import ListItem from '@components/ListItem';
import Loader from '@components/Loader';

import styled from './styled';

const renderContactList = (contacts) => {
  const groups = contacts.reduce((acc, contact) => {
    const { id, fullName } = contact;
    const letter = getFirstLetter(fullName);

    const Contact = (
      <ListItem contact={contact} key={id} />
    );
    acc[letter] = acc[letter] ? [...acc[letter], Contact] : [Contact];

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

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});

const mapDispatchToProps = {
  getContactList
};

const ContactList = ({ hasSearch, contactList, getContactList }) => {
  const [displayList, setDisplayList] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContactList(search);
  }, [search]);

  useEffect(() => {
    setLoading(true);
    if (contactList) {
      const { list, filter } = contactList || {};

      let filteredList = list;

      if (localStorage.getItem('favoritesOnly'))
        filteredList = filteredList.filter((contact) => contact.favorite);

      if (filter)
        filteredList = filteredList.filter((contact) => contact.met && contact.met.toString() === filter);

      setDisplayList(filteredList);
      setLoading(false);
    }
  }, [contactList]);

  return (
    <>
      { hasSearch && (
        <SearchInput
          handleTyping={(e) => setSearch(e.target.value)}
        />
      )}
      { loading ? <Loader /> : (
        <div>
          { renderContactList(displayList) }
          <styled.Count>{`${displayList.length} contacts`}</styled.Count>
        </div>
      )}
    </>
  );
};

ContactList.propTypes = {
  hasSearch: bool,
  contactList: objectOf(any),
  getContactList: func
};

ContactList.defaultProps = {
  hasSearch: false,
  contactList: {},
  getContactList: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
