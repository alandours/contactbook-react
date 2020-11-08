import styled from 'styled-components';
import { nonStyledButton, responsive } from '@theme/mixins';
import { weight, size } from '@theme/typography';
import zindex from '@theme/zindex';
import { Link } from 'react-router-dom';

const Header = styled.header`
  background: ${({ theme }) => theme.selected.main[2]};
  box-shadow: 0 2px 6px 0 ${({ theme }) => theme.selected.main.shadow};
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  z-index: ${zindex.fixed};

  ${responsive.tablet`
    background: ${({ theme }) => theme.selected.main[1]};
  `}
`;

const Sitename = styled.div`
  font-size: ${size.xlarge};
  font-family: Avenir;
  font-weight: ${weight.semiBold};
  display: flex;
`;

const ToggleMenuButton = styled.button`
  ${nonStyledButton};
  cursor: pointer;
  display: block;
  font-size: ${size.large};
  margin-right: 1rem;

  ${responsive.tablet`
    display: none;
  `}
`;

const Sitelink = styled(Link)`
  color: ${({ theme }) => theme.selected.contrast[1]};
`;

export default { Header, Sitename, ToggleMenuButton, Sitelink };
