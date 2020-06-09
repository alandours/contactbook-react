import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faCalendarCheck, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

import { isObjectNotEmpty } from '@utils';

import Loader from '@components/Loader';
import MainInfo from './components/MainInfo';
import FixedInfo from './components/FixedInfo';
import SecondaryInfo from './components/SecondaryInfo';

import styled from './styled';

library.add(faHome, faCalendarCheck, faBirthdayCake);

const ContactView = ({ id }) => {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);
  const [showFixedInfo, setShowFixedInfo] = useState(false);

  const handleScroll = (e) => {
    if (e.target.scrollTop > 180) setShowFixedInfo(true);
    else setShowFixedInfo(false);
  };

  useEffect(() => {
    if (!loading) setLoading(true);
    const url = `/api/contacts/${id}`;
    axios.get(url).then((res) => setContact(res.data));
  }, [id]);

  useEffect(() => {
    setLoading(false);
  }, [contact]);

  return loading ? <Loader /> : (
    isObjectNotEmpty(contact) && !loading && (
      <styled.ContactView onScroll={handleScroll}>
        { showFixedInfo && <FixedInfo contact={contact} /> }
        <MainInfo contact={contact} />
        <SecondaryInfo contact={contact} />
      </styled.ContactView>
    )
  );
};

ContactView.propTypes = {
  id: string.isRequired
};

export default ContactView;
