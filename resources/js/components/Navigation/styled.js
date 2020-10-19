import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getColor } from '@theme/mixins';
import { size, weight } from '@theme/typography';

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLink = styled(Link)`
  align-items: center;
  color: ${getColor('common', 'black')};
  display: flex;
  font-size: ${size.normal};
  & + & {
    margin-left: 2rem;
  }
`;

const HeaderLinkText = styled.span`
  font-size: ${size.text};
  font-weight: ${weight.regular};
  margin-left: 0.5rem;
`;

export default { Navigation, HeaderLink, HeaderLinkText };
