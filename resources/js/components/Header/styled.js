import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getColor } from '@theme/mixins';
import { weight, size, fontFamily } from '@theme/typography';

const Header = styled.div`
  background: ${getColor('common', 'white')};
  box-shadow: 0 2px 6px 0 ${getColor('grey', 'normal')};
  color: ${getColor('common', 'black')};
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

const Sitename = styled.h1`
  font-size: ${size.xlarge};
  font-family: Avenir
`;

const Sitelink = styled(Link)`
  color: ${getColor('common', 'black')};
`;

export default { Header, Sitename, Sitelink };