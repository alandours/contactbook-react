import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getColor } from '@theme/mixins';
import { size } from '@theme/typography';

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLink = styled(Link)`
  color: ${getColor('common', 'white')};
  display: flex;
  font-size: ${size.max};
  & + & {
    margin-left: 2rem;
  }
`;

export default { Navigation, HeaderLink };
