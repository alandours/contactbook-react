import React from 'react';
import { objectOf, any, bool } from 'prop-types';
import { calculateAge, calculateNextBirthdayAge, getListDate } from '@utils/date';

import ProfilePicture from '@components/ProfilePicture';

import styled from './styled';

const ContactLink = ({ contact, showPhoto, showAge, showMonth }) => {
  const { id, fullName, birthday, nextBirthday } = contact || {};

  const age = nextBirthday ? calculateNextBirthdayAge(birthday, nextBirthday) : calculateAge(birthday);

  return (
    <styled.ContactLink to={`/contacts/${id}`}>
      { !!nextBirthday && (
        <styled.Date>
          { getListDate(nextBirthday, showMonth) }
        </styled.Date>
      )}
      { showPhoto && <ProfilePicture contact={contact} thumbnail /> }
      <styled.Name>{ fullName }</styled.Name>
      { showAge && !!age && <styled.Age>{age}</styled.Age> }
    </styled.ContactLink>
  );
};

ContactLink.propTypes = {
  contact: objectOf(any),
  showPhoto: bool,
  showAge: bool,
  showMonth: bool
};

ContactLink.defaultProps = {
  contact: {},
  showPhoto: false,
  showAge: false,
  showMonth: false
};

export default ContactLink;
