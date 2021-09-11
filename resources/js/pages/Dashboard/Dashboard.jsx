import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setPageTitle } from '@utils';
import { getBirthdays } from '@utils/date';

import PageHeader from '@components/PageHeader';
import ContactMessage from '@components/ContactMessage';
import ContactLink from '@components/ContactLink';
import ContactBookLink from '@components/ContactBookLink';
import Section from '@components/Section';
import Loader from '@components/Loader';

import styled from './styled';

const getUpcomingBirthdays = (birthdays) => {
  if (!birthdays) return null;

  const upcoming = birthdays.slice(0, 4);

  return upcoming.map((contact) => (
    <ContactLink
      contact={contact}
      key={contact.id}
      showPhoto
      showAge
      showMonth
    />
  ));
};

const getLastAdded = (contacts) => {
  const lastCreated = [...contacts].sort((c1, c2) => new Date(c2.created_at) - new Date(c1.created_at));
  const last = lastCreated.slice(0, 4);
  return last.map((contact) => (
    <ContactLink
      contact={contact}
      key={contact.id}
      showPhoto
    />
  ));
};

const Dashboard = () => {
  const [upcomingBirthdays, setUpcomingBirthdays] = useState();
  const [lastAdded, setLastAdded] = useState();

  const contacts = useSelector((state) => state.contactList && state.contactList.list);

  useEffect(() => {
    setPageTitle(null);
  }, []);

  useEffect(() => {
    if (contacts) {
      const birthdays = getBirthdays(contacts);
      const upcoming = getUpcomingBirthdays(birthdays);
      setUpcomingBirthdays(upcoming);
      const last = getLastAdded(contacts);
      setLastAdded(last);
    }
  }, [contacts]);

  const subtitle = contacts && contacts.length && `${contacts.length} contacts`;

  return (
    <styled.Dashboard>
      <ContactMessage />
      <PageHeader
        title={process.env.MIX_APP_NAME}
        subtitle={subtitle || null}
      />
      <Section title="Upcoming birthdays" icon="birthday-cake">
        { upcomingBirthdays === undefined ? <Loader /> : upcomingBirthdays || 'There are no upcoming birthdays'}
        { upcomingBirthdays && <ContactBookLink url="/birthdays" highlight>See all birthdays</ContactBookLink> }
      </Section>
      <Section title="Last contacts" icon="user-friends">
        { lastAdded === undefined ? <Loader /> : (lastAdded && lastAdded.length && lastAdded) || 'There are no contacts' }
        { lastAdded && !!lastAdded.length && <ContactBookLink url="/contacts/year" highlight>See contacts by year</ContactBookLink> }
      </Section>
    </styled.Dashboard>
  );
};

export default Dashboard;
