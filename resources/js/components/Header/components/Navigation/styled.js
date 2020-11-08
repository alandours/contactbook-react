import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { responsive } from '@theme/mixins';
import { size, weight } from '@theme/typography';

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLink = styled(Link)`
  align-items: center;
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  font-size: ${size.large};

  ${responsive.tablet`
    font-size: ${size.normal};
  `}

  & + & {
    margin-left: 1.5rem;

    ${responsive.tablet`
      margin-left: 2rem;
    `}
  }
`;

const HeaderLinkText = styled.span`
  display: none;
  font-size: ${size.text};
  font-weight: ${weight.regular};
  margin-left: 0.5rem;

  ${responsive.tablet`
    display: block;
  `}
`;

export default { Navigation, HeaderLink, HeaderLinkText };
