import React from 'react';
import { connect } from 'react-redux';
import { objectOf, any, bool } from 'prop-types';

import ProfilePicture from '@components/ProfilePicture';

import styled from './styled';

const mapStateToProps = (state) => state;

const FixedInfo = ({ contact, isForm }) => {
  const { fullName } = contact;

  return (
    <styled.FixedInfo>
      { !isForm && <ProfilePicture thumbnail /> }
      <styled.Name>{ fullName || 'New contact' }</styled.Name>
    </styled.FixedInfo>
  );
};

FixedInfo.propTypes = {
  contact: objectOf(any).isRequired,
  isForm: bool
};

FixedInfo.defaultProps = {
  isForm: false
};

export default connect(mapStateToProps)(FixedInfo);
