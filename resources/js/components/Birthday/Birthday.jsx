import React from 'react';
import { objectOf, any } from 'prop-types';
import { calculateNextBirthdayAge } from '@utils/date';

import ProfilePicture from '@components/ProfilePicture';

import styled from './styled';

const Birthday = ({ contact }) => {
  const { id, name, lastname, birthday, nextBirthday } = contact || {};

  const age = calculateNextBirthdayAge(birthday, nextBirthday);

  return (
    <styled.Birthday to={`/contacts/${id}`}>
      <styled.Day>{ `${nextBirthday.getUTCDate()}`}</styled.Day>
      <ProfilePicture contact={contact} thumbnail />
      <styled.Name>{`${name} ${lastname || ''}`}</styled.Name>
      { age && <styled.Age>{age}</styled.Age> }
    </styled.Birthday>
  );
};

Birthday.propTypes = {
  contact: objectOf(any)
};

Birthday.defaultProps = {
  contact: {}
};

export default Birthday;
