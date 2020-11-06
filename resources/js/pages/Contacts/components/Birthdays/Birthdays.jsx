import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setPageTitle } from '@utils';
import { getBirthdays, getBirthdaysByMonth } from '@utils/date';

import Title from '@components/Title';
import Subtitle from '@components/Subtitle';
import Loader from '@components/Loader';
import PageHeader from '@components/PageHeader';
import SectionHeader from '@components/SectionHeader';
import ContactLink from '@components/ContactLink';

import styled from './styled';

const renderBirthdays = (contacts) => {
  const birthdays = getBirthdays(contacts);
  const birthdaysByMonth = getBirthdaysByMonth(birthdays);

  if (!birthdaysByMonth) return null;

  return Object.entries(birthdaysByMonth).map(([month, contacts]) => (
    <styled.Month key={month}>
      <SectionHeader title={month} />
      <styled.BirthdaysContainer>
        { contacts.map((contact) => (
          <ContactLink contact={contact} key={contact.id} showAge showPhoto />
        ))}
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
        <Title>Birthdays</Title>
        { contacts && <Subtitle>{`${getBirthdays(contacts).length} birthdays`}</Subtitle> }
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
