import React, { useState } from 'react';
import { objectOf, any } from 'prop-types';
import { connect } from 'react-redux';

import Loader from '@components/Loader';
import FixedInfo from '@components/FixedInfo';
import ContactMessage from '@components/ContactMessage';
import MainInfo from './components/MainInfo';
import SecondaryInfo from './components/SecondaryInfo';

import styled from './styled';

const mapStateToProps = (state) => state;

const Contact = ({ contact }) => {
  const [showFixedInfo, setShowFixedInfo] = useState(false);

  const { loading } = contact || {};

  const handleScroll = (e) => {
    if (e.target.scrollTop > 180) setShowFixedInfo(true);
    else setShowFixedInfo(false);
  };

  return loading ? <Loader /> : (
    <styled.ContactView onScroll={handleScroll}>
      { showFixedInfo && <FixedInfo /> }
      <ContactMessage />
      <MainInfo />
      <SecondaryInfo />
    </styled.ContactView>
  );
};

Contact.propTypes = {
  contact: objectOf(any)
};

Contact.defaultProps = {
  contact: {}
};

export default connect(mapStateToProps)(Contact);
