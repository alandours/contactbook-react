import styled from 'styled-components';
import { weight } from '@theme/typography';

const Birthdays = styled.div`
  height: 100%;
  overflow: scroll;
  width: 100%;
`;

const BirthdayList = styled.div`
`;

const Month = styled.div`
`;

const MonthName = styled.h3`
  font-weight: ${weight.semiBold};
`;

const BirthdaysContainer = styled.div`
  margin: 0.5rem 1.25rem;
`;

export default { Birthdays, BirthdayList, Month, MonthName, BirthdaysContainer };
