import React from 'react';
import { useSelector } from 'react-redux';

import { getNextBirthday } from '@utils';

import Loader from '@components/Loader';
import SectionHeader from '@components/SectionHeader';
import Birthday from './components/Birthday';

import styled from './styled';

const getBirthdays = (contacts) => {
  const withBirthdays = contacts.filter((contact) => contact.birthday);

  if (!withBirthdays.length) return null;

  const withNextBirthday = withBirthdays.map((contact) => ({
    ...contact,
    nextBirthday: getNextBirthday(contact.birthday)
  }));

  const sortedByBirthday = withNextBirthday.sort((c1, c2) => c1.nextBirthday - c2.nextBirthday);

  const groupedByBirthdayMonth = sortedByBirthday.reduce((acc, curr) => {
    const group = acc;
    const { nextBirthday } = curr || {};

    const monthYear = `${nextBirthday.toLocaleString('en', { month: 'long' })} ${nextBirthday.getFullYear()}`;

    group[monthYear] = group[monthYear] ? [...group[monthYear], curr] : [curr];

    return group;
  }, {});

  return groupedByBirthdayMonth;
};

const renderBirthdays = (contacts) => {
  const birthdays = getBirthdays(contacts);

  if (!birthdays) return null;

  return Object.entries(birthdays).map(([month, contacts]) => (
    <styled.Month key={month}>
      <SectionHeader title={month} />
      <styled.BirthdaysContainer>
        { contacts.map((contact) => <Birthday contact={contact} key={contact.id} />) }
      </styled.BirthdaysContainer>
    </styled.Month>
  ));
};

const Birthdays = () => {
  const contacts = useSelector((state) => state.contactList);

  return contacts && contacts.length ? (
    <styled.Birthdays>
      <styled.Title>Birthdays</styled.Title>
      { renderBirthdays(contacts) }
    </styled.Birthdays>
  ) : <Loader />;
};

export default Birthdays;
