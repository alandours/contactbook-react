import React from 'react';
import { objectOf, any } from 'prop-types';

import styled from './styled';

const FixedInfo = ({ contact }) => {
  const { photo, full_name: fullName } = contact;

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

export default FixedInfo;
