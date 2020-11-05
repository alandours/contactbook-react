import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { weight, size } from '@theme/typography';

const Header = styled.header`
  background: ${({ theme }) => theme.selected.main[1]};
  box-shadow: 0 2px 6px 0 ${({ theme }) => theme.selected.main.shadow};
  color: ${({ theme }) => theme.selected.contrast[1]};
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
  color: ${({ theme }) => theme.selected.contrast[1]};
`;

export default { Header, Sitename, Sitelink };
