import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getColor } from '@theme/mixins';
import { weight, size } from '@theme/typography';
import zindex from '@theme/zindex';

const Birthdays = styled.div`
  height: 100%;
  overflow: scroll;
  width: 100%;
`;

const Title = styled.h2`
  font-size: ${size.max};
  font-weight: ${weight.bold};
  text-align: center;
`;

const Month = styled.div`
`;

const MonthName = styled.h3`
  font-weight: ${weight.semiBold};
`;

const BirthdaysContainer = styled.div`
  margin: 0.5rem 1.25rem;
`;

export default { Birthdays, Title, Month, MonthName, BirthdaysContainer };
