import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getColor } from '@theme/mixins';
import { weight, size } from '@theme/typography';

const Header = styled.header`
  background: ${getColor('main', 1)};
  box-shadow: 0 2px 6px 0 ${getColor('main', 'shadow')};
  color: ${getColor('contrast', 1)};
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

const Sitename = styled.div`
  font-size: ${size.xlarge};
  font-family: Avenir;
  font-weight: ${weight.semiBold};
`;

const Sitelink = styled(Link)`
  color: ${getColor('contrast', 1)};
`;

export default { Header, Sitename, Sitelink };
