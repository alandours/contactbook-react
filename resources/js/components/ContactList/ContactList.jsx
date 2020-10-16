import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bool, arrayOf, any, func } from 'prop-types';
import { getContactList } from '@store/actions';
import { getFirstLetter, formatFullName } from '@utils';

import SearchInput from '@components/SearchInput';
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

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});

const mapDispatchToProps = {
  getContactList
};

const ContactList = ({ hasSearch, contactList, getContactList }) => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContactList(search);
  }, [search]);

  useEffect(() => {
    if ((contactList)) {
      setLoading(false);
      setList(buildContactList(contactList));
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
          { list }
          <styled.Count>{`${contactList.length} contacts`}</styled.Count>
        </div>
      )}
    </>
  );
};

ContactList.propTypes = {
  hasSearch: bool,
  contactList: arrayOf(any),
  getContactList: func
};

ContactList.defaultProps = {
  hasSearch: false,
  contactList: [],
  getContactList: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
