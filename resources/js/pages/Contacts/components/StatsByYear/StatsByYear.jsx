import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats, setYearFilter } from '@store/actions';
import { setPageTitle } from '@utils';

import PageHeader from '@components/PageHeader';
import Title from '@components/Title';
import Subtitle from '@components/Subtitle';
import SectionHeader from '@components/SectionHeader';
import Loader from '@components/Loader';

import styled from './styled';

const StatsByYear = () => {
  const stats = useSelector((state) => state.stats);
  const years = Object.keys(stats);
  const yearFilter = useSelector((state) => state.contactList && state.contactList.filter);
  const dispatch = useDispatch();
  const statsHeight = 400;

  useEffect(() => {
    dispatch(getStats());
    setPageTitle('Contacts by year');
    return () => dispatch(setYearFilter(null));
  }, []);

  const clearFilter = (e) => {
    if (!e.target.dataset.stat)
      dispatch(setYearFilter(null));
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
          onClick={() => dispatch(setYearFilter(year))}
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

  return stats ? (
    <styled.StatsByYear onClick={clearFilter}>
      <PageHeader>
        <Title>Contacts by year</Title>
        { !!years.length && <Subtitle>{`From ${years[0]} to ${years[years.length - 1]}`}</Subtitle> }
      </PageHeader>
      <SectionHeader title="Contacts by year" />
      <styled.Stats height={statsHeight}>
        { renderStats() }
      </styled.Stats>
    </styled.StatsByYear>
  ) : <Loader />;
};

export default StatsByYear;
