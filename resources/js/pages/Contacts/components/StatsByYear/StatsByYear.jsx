import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats, setYearFilter } from '@store/actions';
import { setPageTitle } from '@utils';

import Loader from '@components/Loader';

import styled from './styled';

const StatsByYear = () => {
  const stats = useSelector((state) => state.stats);
  const yearFilter = useSelector((state) => state.contactList && state.contactList.filter);
  const dispatch = useDispatch();
  const statsHeight = 250;

  useEffect(() => {
    dispatch(getStats());
    setPageTitle('Stats by year');
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
      <styled.StatsByYearTitle>By Year</styled.StatsByYearTitle>
      <styled.Stats height={statsHeight}>
        { renderStats() }
      </styled.Stats>
    </styled.StatsByYear>
  ) : <Loader />;
};

export default StatsByYear;
