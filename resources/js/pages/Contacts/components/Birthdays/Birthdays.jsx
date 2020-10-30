import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setPageTitle } from '@utils';
import { getBirthdays, getBirthdaysByMonth } from '@utils/date';

import Loader from '@components/Loader';
import PageHeader from '@components/PageHeader';
import SectionHeader from '@components/SectionHeader';
import Birthday from '@components/Birthday';

import styled from './styled';

const renderBirthdays = (contacts) => {
  const birthdays = getBirthdays(contacts);
  const birthdaysByMonth = getBirthdaysByMonth(birthdays);

  if (!birthdaysByMonth) return null;

  return Object.entries(birthdaysByMonth).map(([month, contacts]) => (
    <styled.Month key={month}>
      <SectionHeader title={month} />
      <styled.BirthdaysContainer>
        { contacts.map((contact) => <Birthday contact={contact} key={contact.id} displayMonth />) }
      </styled.BirthdaysContainer>
    </styled.Month>
  ));
};

const Birthdays = () => {
  const contacts = useSelector((state) => state.contactList && state.contactList.list);

  useEffect(() => {
    setPageTitle('Birthdays');
  }, []);

  return (
    <styled.Birthdays>
      <PageHeader>
        <styled.Title>Birthdays</styled.Title>
      </PageHeader>
      { contacts && contacts.length ? (
        <styled.BirthdayList>
          { renderBirthdays(contacts) }
        </styled.BirthdayList>
      ) : <Loader /> }
    </styled.Birthdays>
  );
};

export default Birthdays;
