import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setPageTitle } from '@utils';
import { getBirthdays, getBirthdaysByMonth } from '@utils/date';

import PageHeader from '@components/PageHeader';
import Section from '@components/Section';
import ContactLink from '@components/ContactLink';
import Loader from '@components/Loader';

import styled from './styled';

const renderBirthdays = (contacts) => {
  const birthdays = getBirthdays(contacts);
  const birthdaysByMonth = getBirthdaysByMonth(birthdays);

  if (!birthdaysByMonth) return null;

  return Object.entries(birthdaysByMonth).map(([month, contacts]) => (
    <Section title={month} key={month}>
      { contacts.map((contact) => (
        <ContactLink contact={contact} key={contact.id} showAge showPhoto />
      ))}
    </Section>
  ));
};

const Birthdays = () => {
  const contacts = useSelector((state) => state.contactList && state.contactList.list);

  useEffect(() => {
    setPageTitle('Birthdays');
  }, []);

  const subtitle = contacts && `${getBirthdays(contacts).length} birthdays`;

  return (
    <styled.Birthdays>
      <PageHeader
        title="Birthdays"
        subtitle={subtitle}
      />
      { contacts && contacts.length ? renderBirthdays(contacts) : <Loader /> }
    </styled.Birthdays>
  );
};

export default Birthdays;
