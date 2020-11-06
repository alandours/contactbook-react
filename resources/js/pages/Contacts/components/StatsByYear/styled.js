import styled from 'styled-components';
import { weight, size } from '@theme/typography';

const StatsByYear = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  width: 100%;
`;

const Stats = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin: 4rem 2rem;
  max-width: 100%;

  ${({ height }) => !!height && `
    height: ${height}px
  `};
`;

const Year = styled.div`
  bottom: -40px;
  color: ${({ theme }) => theme.selected.contrast[2]};
  font-size: ${size.small};
  font-weight: ${weight.light};
  transform: rotate(90deg);
  position: absolute;
  width: 100%;
`;

const Quantity = styled.div`
  color: ${({ theme }) => theme.mainColor.dark};
  display: flex;
  font-size: ${size.small};
  font-weight: ${weight.regular};
  justify-content: center;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: -20px;
  width: 100%;
`;

const Stat = styled.div`
  background: ${({ theme }) => theme.mainColor.dark};
  cursor: pointer;
  min-width: 5px;
  width: 100%;
  position: relative;

  & + & {
    margin-left: 2px;
  }

  &:hover {
    background: ${({ theme }) => theme.mainColor.light};
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
    background: ${({ theme }) => theme.mainColor.light};

    & ${Quantity} {
      opacity: 1;
      transition: 200ms;
    }
  `};
`;

export default { StatsByYear, Stats, Stat, Year, Quantity };
