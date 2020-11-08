import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats, getContactList, getContactListByYear, toggleContactList } from '@store/actions';
import { setPageTitle, isMedia } from '@utils';

import PageHeader from '@components/PageHeader';
import Section from '@components/Section';
import Loader from '@components/Loader';

import styled from './styled';

const ContactsByYear = () => {
  const stats = useSelector((state) => state.stats);
  const years = Object.keys(stats);
  const yearFilter = useSelector((state) => state.contactList && state.contactList.filter);
  const dispatch = useDispatch();
  const statsHeight = 400;

  useEffect(() => {
    dispatch(getStats());
    setPageTitle('Contacts by year');
  }, []);

  const clearFilter = (e) => {
    if (!e.target.dataset.stat)
      dispatch(getContactList());
  };

  const handleStatClick = (year) => {
    dispatch(getContactListByYear(year));

    if (isMedia('tablet'))
      dispatch(toggleContactList());
  };

  const renderStats = () => {
    const data = Object.entries(stats);
    const values = Object.values(stats);
    const max = Math.max(...values);

    return data.map(([year, quantity]) => {
      if (!year) return null;

      const height = (statsHeight / max) * quantity;

      return (
        <styled.Stat
          onClick={() => handleStatClick(year)}
          height={height}
          isActive={yearFilter === year}
          data-stat={year}
          key={year}
        >
          <styled.Year>{year}</styled.Year>
          <styled.Quantity>{quantity}</styled.Quantity>
        </styled.Stat>
      );
    });
  };

  const subtitle = !!years.length && `From ${years[0]} to ${years[years.length - 1]}`;

  return stats ? (
    <styled.ContactsByYear onClick={clearFilter}>
      <PageHeader
        title="Contacts by year"
        subtitle={subtitle || null}
      />
      <Section title="Contacts by year">
        <styled.Stats height={statsHeight}>
          { renderStats() }
        </styled.Stats>
      </Section>
    </styled.ContactsByYear>
  ) : <Loader />;
};

export default ContactsByYear;
