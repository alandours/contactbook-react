import React from 'react';
import { connect } from 'react-redux';
import { objectOf, any } from 'prop-types';

import ProfilePicture from '@components/ProfilePicture';

import styled from './styled';

const mapStateToProps = (state) => state;

const FixedInfo = ({ contact }) => {
  const { fullName } = contact;

  return (
    <styled.FixedInfo>
      <ProfilePicture thumbnail />
      { fullName && <styled.Name>{fullName}</styled.Name> }
    </styled.FixedInfo>
  );
};

FixedInfo.propTypes = {
  contact: objectOf(any).isRequired
};

export default connect(mapStateToProps)(FixedInfo);
