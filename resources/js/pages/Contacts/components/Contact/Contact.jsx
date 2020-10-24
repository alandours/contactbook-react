import React, { useEffect, useState } from 'react';
import { objectOf, any } from 'prop-types';
import { connect } from 'react-redux';

import NotFound from '@pages/NotFound';
import Loader from '@components/Loader';
import FixedInfo from '@components/FixedInfo';
import ContactMessage from '@components/ContactMessage';
import MainInfo from './components/MainInfo';
import SecondaryInfo from './components/SecondaryInfo';

import styled from './styled';

const mapStateToProps = (state) => state;

const Contact = ({ contact }) => {
  const [showFixedInfo, setShowFixedInfo] = useState(false);

  const { id, loading } = contact || {};

  const handleScroll = (e) => {
    if (e.target.scrollTop > 190) setShowFixedInfo(true);
    else setShowFixedInfo(false);
  };

  if (loading) return <Loader />;

  if (!loading && !id) return <NotFound page="contact" />;

  return (
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
