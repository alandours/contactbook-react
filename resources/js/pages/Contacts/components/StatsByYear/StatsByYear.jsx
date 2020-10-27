import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats, setYearFilter } from '@store/actions';

import styled from './styled';

const statsHeight = 250;

const StatsByYear = () => {
  const [total, setTotal] = useState(null);
  const stats = useSelector((state) => state.stats);
  const contactList = useSelector((state) => state.contactList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStats());
    return () => dispatch(setYearFilter(null));
  }, []);

  useEffect(() => {
    if (contactList && !total) setTotal(contactList.list.length);
  }, [contactList]);

  const clearFilter = (e) => {
    if (!e.target.dataset.stat)
      dispatch(setYearFilter(null));
  };

  const data = Object.entries(stats);
  const values = Object.values(stats);
  const max = Math.max(...values);

  return (
    <styled.StatsByYear onClick={clearFilter}>
      <styled.StatsByYearTitle>By Year</styled.StatsByYearTitle>
      <styled.Stats height={statsHeight}>
        {
          stats && total && data.map(([year, quantity]) => {
            const height = (statsHeight / max) * quantity;

            return (
              <styled.Stat
                onClick={() => dispatch(setYearFilter(year))}
                height={height}
                isActive={contactList.filter === year}
                data-stat={year}
                key={year}
              >
                <styled.Year>{year}</styled.Year>
                <styled.Quantity>{quantity}</styled.Quantity>
              </styled.Stat>
            );
          })
        }
      </styled.Stats>
    </styled.StatsByYear>
  );
};

export default StatsByYear;
