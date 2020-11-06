import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setPageTitle } from '@utils';
import { getBirthdays } from '@utils/date';

import PageHeader from '@components/PageHeader';
import Title from '@components/Title';
import Subtitle from '@components/Subtitle';
import SectionHeader from '@components/SectionHeader';
import ContactMessage from '@components/ContactMessage';
import ContactLink from '@components/ContactLink';
import ContactBookLink from '@components/ContactBookLink';

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
  const [upcomingBirthdays, setUpcomingBirthdays] = useState(null);
  const [lastAdded, setLastAdded] = useState(null);

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

  return (
    <styled.Dashboard>
      <ContactMessage />
      <PageHeader>
        <Title>{ process.env.MIX_APP_NAME }</Title>
        { contacts && contacts.length && <Subtitle>{`${contacts.length} contacts`}</Subtitle> }
      </PageHeader>
      <styled.DashboardSection>
        <SectionHeader title="Upcoming birthdays" icon="birthday-cake" />
        <styled.DashboardContainer>
          { upcomingBirthdays }
        </styled.DashboardContainer>
        <ContactBookLink url="/contacts/birthdays" highlight>See all birthdays</ContactBookLink>
      </styled.DashboardSection>
      <styled.DashboardSection>
        <SectionHeader title="Last contacts" icon="user-friends" />
        <styled.DashboardContainer>
          { lastAdded }
        </styled.DashboardContainer>
        <ContactBookLink url="/contacts/year" highlight>See contacts by year</ContactBookLink>
      </styled.DashboardSection>
    </styled.Dashboard>
  );
};

export default Dashboard;
