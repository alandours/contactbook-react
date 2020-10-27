import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { weight, size } from '@theme/typography';
import zindex from '@theme/zindex';

import Title from '@components/Title';

const StatsByYear = styled.div`
  height: 100%;
  overflow: auto;
  padding: 1rem;
  width: 100%;
`;

const StatsByYearTitle = styled(Title)`
  justify-content: center;
`;

const Stats = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ height }) => !!height && `
    height: ${height}px
  `};
`;

const Year = styled.div`
  bottom: -40px;
  color: ${getColor('grey', 'darkest')};
  font-size: ${size.small};
  font-weight: ${weight.light};
  transform: rotate(90deg);
  position: absolute;
  width: 100%;
`;

const Quantity = styled.div`
  color: ${getColor('primary', 'dark')};
  font-size: ${size.small};
  font-weight: ${weight.regular};
  opacity: 0;
  position: absolute;
  text-align: center;
  top: -20px;
  width: 100%;
`;

const Stat = styled.div`
  background: ${getColor('primary', 'dark')};
  cursor: pointer;
  min-width: 5px;
  width: 100%;
  position: relative;

  & + & {
    margin-left: 2px;
  }

  &:hover {
    background: ${getColor('primary', 'light')};
    transition: 200ms;
  }

  &:hover ${Quantity} {
    opacity: 1;
    transition: 200ms;
  }

  ${({ height }) => !!height && `
    height: ${height}px
  `};

  ${({ isActive }) => !!isActive && `
    background: ${getColor('primary', 'light')};

    & ${Quantity} {
      opacity: 1;
      transition: 200ms;
    }
  `};
`;

export default { StatsByYear, StatsByYearTitle, Stats, Stat, Year, Quantity };
