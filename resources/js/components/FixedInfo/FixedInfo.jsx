import React from 'react';
import { connect } from 'react-redux';
import { objectOf, any } from 'prop-types';

import styled from './styled';

const mapStateToProps = (state) => state;

const FixedInfo = ({ contact }) => {
  const { photo, fullName } = contact;

  return (
    <styled.FixedInfo>
      { photo && <styled.ProfilePicture src={`/img/contacts/${photo}`} alt={`${fullName}'s profile picture`} /> }
      { fullName && <styled.Name>{fullName}</styled.Name> }
    </styled.FixedInfo>
  );
};

FixedInfo.propTypes = {
  contact: objectOf(any).isRequired
};

export default connect(mapStateToProps)(FixedInfo);
