import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setPageTitle } from '@utils';
import { getBirthdays, getBirthdaysByMonth } from '@utils/date';

import PageHeader from '@components/PageHeader';
import Section from '@components/Section';
import ContactLink from '@components/ContactLink';
import Loader from '@components/Loader';

import styled from './styled';

const getBirthdayGroups = (contacts) => {
  const birthdays = getBirthdays(contacts);
  if (!birthdays) return { birthdays: null, quantity: 0 };

  const birthdaysByMonth = getBirthdaysByMonth(birthdays);

  const birthdayGroups = Object.entries(birthdaysByMonth).map(([month, contacts]) => (
    <Section title={month} key={month}>
      { contacts.map((contact) => (
        <ContactLink contact={contact} key={contact.id} showAge showPhoto />
      ))}
    </Section>
  ));

  return { birthdays: birthdayGroups, quantity: birthdays.length };
};

const Birthdays = () => {
  const contacts = useSelector((state) => state.contactList && state.contactList.list);

  useEffect(() => {
    setPageTitle('Birthdays');
  }, []);

  const birthdayGroups = contacts && contacts.length && getBirthdayGroups(contacts);
  const { birthdays, quantity } = birthdayGroups || {};
  const subtitle = birthdayGroups && `${quantity} birthdays`;

  return (
    <styled.Birthdays>
      <PageHeader
        title="Birthdays"
        subtitle={subtitle}
      />
      { !birthdayGroups && <Loader /> }
      { quantity !== 0 && birthdays }
    </styled.Birthdays>
  );
};

export default Birthdays;
