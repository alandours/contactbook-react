import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bool, objectOf, any, func } from 'prop-types';
import { getContactList } from '@store/actions';
import { getFirstLetter, formatFullName } from '@utils';

import SearchInput from '@components/SearchInput';
import ListItem from '@components/ListItem';
import Loader from '@components/Loader';
import FavoriteIcon from '@components/FavoriteIcon';

import styled from './styled';

const renderContactList = (contacts) => {
  const groups = contacts.reduce((acc, contact) => {
    const { id, name, lastname, favorite } = contact;
    const fullName = formatFullName(name, lastname);
    const letter = getFirstLetter(fullName);

    const listItem = (
      <ListItem id={id} key={id}>
        <>
          {fullName}
          {!!favorite && <FavoriteIcon isFavorite={!!favorite} />}
        </>
      </ListItem>
    );
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
    if (contactList) {
      const { list, filter } = contactList || {};

      const filteredList = filter ? list.filter((contact) => contact.met && contact.met.toString() === filter) : list;

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

      { displayList && (
        <div>
          { loading && <Loader /> }
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
